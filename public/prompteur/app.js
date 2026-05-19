const els = {
  body: document.body,
  stageFrame: document.querySelector("#stageFrame"),
  readerWindow: document.querySelector("#readerWindow"),
  scriptOutput: document.querySelector("#scriptOutput"),
  scriptInput: document.querySelector("#scriptInput"),
  playButton: document.querySelector("#playButton"),
  playLabel: document.querySelector("#playLabel"),
  resetButton: document.querySelector("#resetButton"),
  mirrorButton: document.querySelector("#mirrorButton"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  rehearsalButton: document.querySelector("#rehearsalButton"),
  speedRange: document.querySelector("#speedRange"),
  speedValue: document.querySelector("#speedValue"),
  fontRange: document.querySelector("#fontRange"),
  fontValue: document.querySelector("#fontValue"),
  lineHeightRange: document.querySelector("#lineHeightRange"),
  lineHeightValue: document.querySelector("#lineHeightValue"),
  marginRange: document.querySelector("#marginRange"),
  marginValue: document.querySelector("#marginValue"),
  cuePositionRange: document.querySelector("#cuePositionRange"),
  cuePositionValue: document.querySelector("#cuePositionValue"),
  cueOpacityRange: document.querySelector("#cueOpacityRange"),
  cueOpacityValue: document.querySelector("#cueOpacityValue"),
  focusToggle: document.querySelector("#focusToggle"),
  contrastToggle: document.querySelector("#contrastToggle"),
  tapToggle: document.querySelector("#tapToggle"),
  wideToggle: document.querySelector("#wideToggle"),
  fileInput: document.querySelector("#fileInput"),
  sampleButton: document.querySelector("#sampleButton"),
  clearButton: document.querySelector("#clearButton"),
  wordCount: document.querySelector("#wordCount"),
  readingTime: document.querySelector("#readingTime"),
  blockCount: document.querySelector("#blockCount"),
  runState: document.querySelector("#runState"),
  progressLabel: document.querySelector("#progressLabel"),
  segmentLabel: document.querySelector("#segmentLabel"),
  countdown: document.querySelector("#countdown"),
  segmentList: document.querySelector("#segmentList"),
  loopButton: document.querySelector("#loopButton"),
  loopPill: document.querySelector("#loopPill"),
  prevSegmentButton: document.querySelector("#prevSegmentButton"),
  nextSegmentButton: document.querySelector("#nextSegmentButton"),
};

const state = {
  isPlaying: false,
  mirrorMode: "off",
  speed: Number(els.speedRange.value),
  animationId: 0,
  lastFrameTime: 0,
  countdownTimer: 0,
  segments: [],
  selectedSegmentIndex: -1,
  readingSegmentIndex: -1,
  loopEnabled: false,
};

const sampleScript = `Salut, c'est Loren.

Aujourd'hui on enregistre une video simple, claire, et un peu plus vivante qu'un bloc-notes pose sous la camera.

Point 1 : garder les phrases courtes.
Point 2 : respirer entre les idees.
Point 3 : regarder l'objectif, pas le clavier.

Si une phrase sonne faux, on ne panique pas. On la reformule et on continue.

Conclusion : merci d'avoir regarde, abonnez-vous si le format vous aide, et on se retrouve dans la prochaine video.`;

const mirrorModes = ["off", "vertical", "horizontal", "both"];

function setCssVar(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function getBlocks(text) {
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function getMaxScroll() {
  return Math.max(0, els.readerWindow.scrollHeight - els.readerWindow.clientHeight);
}

function getScrollRatio() {
  const maxScroll = getMaxScroll();
  return maxScroll === 0 ? 0 : els.readerWindow.scrollTop / maxScroll;
}

function setScrollRatio(ratio) {
  els.readerWindow.scrollTop = Math.max(0, Math.min(1, ratio)) * getMaxScroll();
}

function normalizeSegmentTitle(text) {
  return text.replace(/\s+/g, " ").trim();
}

function getSegmentElement(index) {
  return els.scriptOutput.querySelector(`[data-segment-index="${index}"]`);
}

function getSegmentScrollTop(index) {
  const segment = getSegmentElement(index);
  if (!segment) {
    return 0;
  }

  const cueOffset = els.readerWindow.clientHeight * 0.42;
  return Math.max(0, Math.min(getMaxScroll(), segment.offsetTop - cueOffset));
}

function getLoopBounds(index) {
  const start = getSegmentScrollTop(index);
  const maxScroll = getMaxScroll();
  const nextStart =
    index < state.segments.length - 1 ? getSegmentScrollTop(index + 1) : maxScroll;
  const end = Math.max(start + 24, Math.min(maxScroll, nextStart - 12));
  return { start, end };
}

function renderScript({ preserveScroll = true } = {}) {
  const scrollRatio = getScrollRatio();
  const text = els.scriptInput.value.trim();
  const blocks = getBlocks(text);

  state.segments = blocks;
  els.scriptOutput.replaceChildren();

  if (blocks.length === 0) {
    state.selectedSegmentIndex = -1;
    state.readingSegmentIndex = -1;
    state.loopEnabled = false;

    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent =
      "Collez un script, lancez le d\u00e9filement, gardez le regard cam\u00e9ra.";
    els.scriptOutput.append(empty);
  } else {
    if (state.selectedSegmentIndex < 0 || state.selectedSegmentIndex >= blocks.length) {
      state.selectedSegmentIndex = 0;
    }

    const fragment = document.createDocumentFragment();
    blocks.forEach((block, index) => {
      const paragraph = document.createElement("p");
      paragraph.dataset.segmentIndex = String(index);
      paragraph.textContent = block;
      fragment.append(paragraph);
    });
    els.scriptOutput.append(fragment);
  }

  if (preserveScroll) {
    setScrollRatio(scrollRatio);
  } else {
    els.readerWindow.scrollTop = 0;
  }

  updateMetrics(text, blocks.length);
  renderSegmentList();
  updateActiveSegmentFromScroll();
  updateLoopUi();
  updateProgress();
}

function renderSegmentList() {
  els.segmentList.replaceChildren();

  if (state.segments.length === 0) {
    const empty = document.createElement("p");
    empty.className = "segment-empty";
    empty.textContent = "Aucun segment";
    els.segmentList.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  state.segments.forEach((segment, index) => {
    const button = document.createElement("button");
    const title = normalizeSegmentTitle(segment);
    button.type = "button";
    button.className = "segment-card";
    button.dataset.segmentButton = String(index);
    button.innerHTML = `<span>${index + 1}</span><strong></strong>`;
    button.querySelector("strong").textContent =
      title.length > 88 ? `${title.slice(0, 88)}...` : title;
    button.addEventListener("click", () => selectSegment(index, { jump: true }));
    fragment.append(button);
  });

  els.segmentList.append(fragment);
  paintSegmentStates();
}

function paintSegmentStates() {
  els.segmentList.querySelectorAll("[data-segment-button]").forEach((button) => {
    const index = Number(button.dataset.segmentButton);
    button.classList.toggle("is-selected", index === state.selectedSegmentIndex);
    button.classList.toggle("is-reading", index === state.readingSegmentIndex);
    button.classList.toggle(
      "is-looped",
      state.loopEnabled && index === state.selectedSegmentIndex,
    );
  });
}

function updateMetrics(text, blockTotal) {
  const words = text.match(/[\p{L}\p{N}'\u2019-]+/gu) ?? [];
  const minutes = words.length / 145;
  const totalSeconds = Math.round(minutes * 60);
  const displayMinutes = Math.floor(totalSeconds / 60);
  const displaySeconds = String(totalSeconds % 60).padStart(2, "0");

  els.wordCount.textContent = String(words.length);
  els.readingTime.textContent = `${displayMinutes}:${displaySeconds}`;
  els.blockCount.textContent = String(blockTotal);
}

function updateProgress() {
  const maxScroll = Math.max(1, getMaxScroll());
  const progress = Math.min(100, Math.max(0, (els.readerWindow.scrollTop / maxScroll) * 100));
  els.progressLabel.textContent = `${Math.round(progress)}%`;

  if (!state.loopEnabled && progress >= 99.8 && state.isPlaying) {
    pause();
    els.runState.textContent = "Fin";
  }
}

function updateActiveSegmentFromScroll() {
  if (state.segments.length === 0) {
    els.segmentLabel.textContent = "Segment -";
    paintSegmentStates();
    return;
  }

  const cuePosition = els.readerWindow.scrollTop + els.readerWindow.clientHeight * 0.46;
  let activeIndex = 0;

  for (let index = 0; index < state.segments.length; index += 1) {
    const segment = getSegmentElement(index);
    if (segment && segment.offsetTop <= cuePosition) {
      activeIndex = index;
    }
  }

  state.readingSegmentIndex = activeIndex;
  els.segmentLabel.textContent = `Segment ${activeIndex + 1}/${state.segments.length}`;
  paintSegmentStates();
}

function tick(now) {
  if (!state.isPlaying) {
    return;
  }

  if (!state.lastFrameTime) {
    state.lastFrameTime = now;
  }

  const elapsed = Math.min(80, now - state.lastFrameTime) / 1000;
  state.lastFrameTime = now;
  els.readerWindow.scrollTop += state.speed * elapsed;

  if (state.loopEnabled && state.selectedSegmentIndex >= 0) {
    const bounds = getLoopBounds(state.selectedSegmentIndex);
    if (els.readerWindow.scrollTop >= bounds.end) {
      els.readerWindow.scrollTop = bounds.start;
    }
  }

  updateActiveSegmentFromScroll();
  updateProgress();
  state.animationId = requestAnimationFrame(tick);
}

function play() {
  if (state.isPlaying) {
    return;
  }

  state.isPlaying = true;
  state.lastFrameTime = 0;
  els.stageFrame.classList.add("is-running");
  els.playLabel.textContent = "Pause";
  els.playButton.querySelector(".play-glyph").textContent = "\u23f8";
  els.runState.textContent = state.loopEnabled ? "Boucle" : "Lecture";
  state.animationId = requestAnimationFrame(tick);
}

function pause() {
  state.isPlaying = false;
  cancelAnimationFrame(state.animationId);
  els.stageFrame.classList.remove("is-running");
  els.playLabel.textContent = "Lancer";
  els.playButton.querySelector(".play-glyph").textContent = "\u25b6";
  if (els.runState.textContent !== "Fin") {
    els.runState.textContent = state.loopEnabled ? "Boucle pause" : "Pause";
  }
}

function togglePlay() {
  if (state.isPlaying) {
    pause();
  } else {
    play();
  }
}

function resetReader() {
  pause();

  if (state.loopEnabled && state.selectedSegmentIndex >= 0) {
    scrollToSegment(state.selectedSegmentIndex);
  } else {
    els.readerWindow.scrollTop = 0;
  }

  els.runState.textContent = "Pr\u00eat";
  updateActiveSegmentFromScroll();
  updateProgress();
}

function scrollToSegment(index) {
  els.readerWindow.scrollTop = getSegmentScrollTop(index);
  updateActiveSegmentFromScroll();
  updateProgress();
}

function selectSegment(index, { jump = false } = {}) {
  if (state.segments.length === 0) {
    return;
  }

  state.selectedSegmentIndex = Math.max(0, Math.min(state.segments.length - 1, index));

  if (jump) {
    scrollToSegment(state.selectedSegmentIndex);
  }

  updateLoopUi();
  paintSegmentStates();
}

function moveSegment(delta) {
  if (state.segments.length === 0) {
    return;
  }

  const fallback = state.selectedSegmentIndex >= 0 ? state.selectedSegmentIndex : 0;
  const next = (fallback + delta + state.segments.length) % state.segments.length;
  selectSegment(next, { jump: true });
}

function toggleLoop() {
  if (state.segments.length === 0) {
    return;
  }

  if (state.selectedSegmentIndex < 0) {
    state.selectedSegmentIndex = state.readingSegmentIndex >= 0 ? state.readingSegmentIndex : 0;
  }

  state.loopEnabled = !state.loopEnabled;

  if (state.loopEnabled) {
    scrollToSegment(state.selectedSegmentIndex);
    els.runState.textContent = state.isPlaying ? "Boucle" : "Boucle pret";
  } else {
    els.runState.textContent = state.isPlaying ? "Lecture" : "Pause";
  }

  updateLoopUi();
}

function updateLoopUi() {
  const hasSegments = state.segments.length > 0;
  els.loopButton.disabled = !hasSegments;
  els.prevSegmentButton.disabled = !hasSegments;
  els.nextSegmentButton.disabled = !hasSegments;

  if (!hasSegments) {
    els.loopButton.textContent = "Boucler segment";
    els.loopPill.textContent = "Loop off";
    els.loopPill.classList.remove("is-on");
    return;
  }

  const selected = state.selectedSegmentIndex + 1;
  els.loopButton.textContent = state.loopEnabled
    ? `Stop loop ${selected}`
    : `Boucler segment ${selected}`;
  els.loopPill.textContent = state.loopEnabled ? `Loop ${selected}` : "Loop off";
  els.loopPill.classList.toggle("is-on", state.loopEnabled);
  paintSegmentStates();
}

function setMirror(mode) {
  state.mirrorMode = mirrorModes.includes(mode) ? mode : "off";
  els.scriptOutput.classList.toggle("mirror-vertical", state.mirrorMode === "vertical");
  els.scriptOutput.classList.toggle("mirror-horizontal", state.mirrorMode === "horizontal");
  els.scriptOutput.classList.toggle("mirror-both", state.mirrorMode === "both");
  els.mirrorButton.classList.toggle("is-active", state.mirrorMode !== "off");

  const labels = {
    off: "Miroir off",
    vertical: "Miroir haut-bas",
    horizontal: "Miroir gauche-droite",
    both: "Miroir double",
  };
  const glyphs = {
    off: "\u21c4",
    vertical: "\u21c5",
    horizontal: "\u21c4",
    both: "\u2922",
  };

  els.mirrorButton.textContent = glyphs[state.mirrorMode];
  els.mirrorButton.title = labels[state.mirrorMode];
  els.mirrorButton.setAttribute("aria-label", labels[state.mirrorMode]);
}

function cycleMirrorMode() {
  const currentIndex = mirrorModes.indexOf(state.mirrorMode);
  const nextIndex = (currentIndex + 1) % mirrorModes.length;
  setMirror(mirrorModes[nextIndex]);
}

function runCountdown(seconds = 3) {
  if (state.countdownTimer) {
    window.clearInterval(state.countdownTimer);
  }

  pause();
  let remaining = seconds;
  els.countdown.hidden = false;
  els.countdown.textContent = String(remaining);
  els.runState.textContent = "Decompte";

  state.countdownTimer = window.setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      window.clearInterval(state.countdownTimer);
      state.countdownTimer = 0;
      els.countdown.hidden = true;
      play();
      return;
    }
    els.countdown.textContent = String(remaining);
  }, 1000);
}

function applyTheme(themeName) {
  els.body.classList.toggle("theme-bubble", themeName === "bubble");
  els.body.classList.toggle("theme-mono", themeName === "mono");
}

function handleKeyboard(event) {
  const editing = event.target.matches("textarea, input");
  if (editing) {
    return;
  }

  if (event.code === "Space") {
    event.preventDefault();
    togglePlay();
  }

  if (event.key === "r" || event.key === "R") {
    resetReader();
  }

  if (event.key === "m" || event.key === "M") {
    cycleMirrorMode();
  }

  if (event.key === "l" || event.key === "L") {
    toggleLoop();
  }

  if (event.key === "[") {
    moveSegment(-1);
  }

  if (event.key === "]") {
    moveSegment(1);
  }

  if (event.key === "ArrowDown") {
    els.speedRange.value = String(Math.max(Number(els.speedRange.min), state.speed - 4));
    updateSpeed();
  }

  if (event.key === "ArrowUp") {
    els.speedRange.value = String(Math.min(Number(els.speedRange.max), state.speed + 4));
    updateSpeed();
  }

  if (event.key === "+" || event.key === "=") {
    els.fontRange.value = String(
      Math.min(Number(els.fontRange.max), Number(els.fontRange.value) + 2),
    );
    updateFontSize();
  }

  if (event.key === "-" || event.key === "_") {
    els.fontRange.value = String(
      Math.max(Number(els.fontRange.min), Number(els.fontRange.value) - 2),
    );
    updateFontSize();
  }
}

function updateSpeed() {
  state.speed = Number(els.speedRange.value);
  els.speedValue.textContent = String(state.speed);
}

function updateFontSize() {
  const size = Number(els.fontRange.value);
  setCssVar("--reader-font", `${size}px`);
  els.fontValue.textContent = String(size);
}

function updateLineHeight() {
  const lineHeight = Number(els.lineHeightRange.value) / 100;
  setCssVar("--reader-line", String(lineHeight));
  els.lineHeightValue.textContent = lineHeight.toFixed(2);
}

function updateMargin() {
  const margin = Number(els.marginRange.value);
  setCssVar("--reader-margin", `${margin}%`);
  els.marginValue.textContent = String(margin);
}

function updateCuePosition() {
  const position = Number(els.cuePositionRange.value);
  setCssVar("--cue-top", `${position}%`);
  els.cuePositionValue.textContent = String(position);
}

function updateCueOpacity() {
  const opacity = Number(els.cueOpacityRange.value);
  setCssVar("--cue-opacity", String(opacity / 100));
  els.cueOpacityValue.textContent = String(opacity);
}

function applyCueStyle(styleName) {
  els.stageFrame.classList.toggle("cue-solid", styleName === "solid");
  els.stageFrame.classList.toggle("cue-brackets", styleName === "brackets");
}

els.scriptInput.addEventListener("input", () => renderScript({ preserveScroll: true }));
els.playButton.addEventListener("click", togglePlay);
els.resetButton.addEventListener("click", resetReader);
els.mirrorButton.addEventListener("click", cycleMirrorMode);
els.rehearsalButton.addEventListener("click", () => runCountdown(3));
els.loopButton.addEventListener("click", toggleLoop);
els.prevSegmentButton.addEventListener("click", () => moveSegment(-1));
els.nextSegmentButton.addEventListener("click", () => moveSegment(1));
els.speedRange.addEventListener("input", updateSpeed);
els.fontRange.addEventListener("input", updateFontSize);
els.lineHeightRange.addEventListener("input", updateLineHeight);
els.marginRange.addEventListener("input", updateMargin);
els.cuePositionRange.addEventListener("input", updateCuePosition);
els.cueOpacityRange.addEventListener("input", updateCueOpacity);
els.focusToggle.addEventListener("change", () => {
  els.stageFrame.classList.toggle("no-focus", !els.focusToggle.checked);
});
els.contrastToggle.addEventListener("change", () => {
  els.body.classList.toggle("contrast-max", els.contrastToggle.checked);
});
els.tapToggle.addEventListener("change", () => {
  els.readerWindow.toggleAttribute("data-tap-enabled", els.tapToggle.checked);
});
els.wideToggle.addEventListener("change", () => {
  els.body.classList.toggle("wide-mode", els.wideToggle.checked);
});

document.querySelectorAll("input[name='theme']").forEach((input) => {
  input.addEventListener("change", () => applyTheme(input.value));
});

document.querySelectorAll("input[name='cueStyle']").forEach((input) => {
  input.addEventListener("change", () => applyCueStyle(input.value));
});

document.querySelectorAll("input[name='cueColor']").forEach((input) => {
  input.addEventListener("change", () => setCssVar("--cue-color", input.value));
});

els.readerWindow.addEventListener("scroll", () => {
  updateActiveSegmentFromScroll();
  updateProgress();
});
els.readerWindow.addEventListener("click", () => {
  if (els.tapToggle.checked) {
    togglePlay();
  }
});

els.fullscreenButton.addEventListener("click", async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  await els.stageFrame.requestFullscreen();
});

els.fileInput.addEventListener("change", async () => {
  const [file] = els.fileInput.files;
  if (!file) {
    return;
  }

  const text = await file.text();
  els.scriptInput.value = text;
  resetReader();
  renderScript({ preserveScroll: false });
  els.fileInput.value = "";
});

els.sampleButton.addEventListener("click", () => {
  els.scriptInput.value = sampleScript;
  resetReader();
  renderScript({ preserveScroll: false });
});

els.clearButton.addEventListener("click", () => {
  els.scriptInput.value = "";
  resetReader();
  renderScript({ preserveScroll: false });
  els.scriptInput.focus();
});

document.addEventListener("keydown", handleKeyboard);
document.addEventListener("fullscreenchange", () => {
  const fullscreen = Boolean(document.fullscreenElement);
  els.fullscreenButton.textContent = fullscreen ? "\u00d7" : "\u26f6";
  els.fullscreenButton.setAttribute(
    "aria-label",
    fullscreen ? "Quitter le plein ecran" : "Passer en plein ecran",
  );
});

updateSpeed();
updateFontSize();
updateLineHeight();
updateMargin();
updateCuePosition();
updateCueOpacity();
applyCueStyle("soft");
setMirror("off");
renderScript({ preserveScroll: false });
