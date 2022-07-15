type PixProps = {
  width?: number;
  height?: number;
};

export function Pix({ width, height }: PixProps) {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className="IconPixMenu"
      viewBox="0 0 16 16"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M3.284 3.747c.022-.046.048-.07.071-.092l.016-.016.828-.829C4.89 2.12 5.58 1.43 6.268.737A2.375 2.375 0 017.545.046C8.349-.1 9.057.1 9.664.65c.066.06.128.123.19.186l.07.071c.913.913 1.825 1.828 2.737 2.742l.002.002a.67.67 0 00.018.016.268.268 0 01.07.093H12.58c-.723-.02-1.324.244-1.83.757-.524.53-1.051 1.058-1.579 1.584l-.666.666-.023.023c-.023.023-.045.046-.07.068a.44.44 0 01-.592.01 1.207 1.207 0 01-.073-.07l-.02-.02-.773-.774-1.548-1.55a2.338 2.338 0 00-1.182-.652 2.526 2.526 0 00-.551-.055h-.389zM.003 7.787c.03-.032.036-.073.042-.115l.002-.015c.071-.503.272-.947.627-1.31.407-.417.82-.83 1.232-1.242l.618-.618c.036-.037.07-.057.124-.038.026.009.056.008.086.006H3.034c.193.002.387.003.581-.001.54-.013.984.18 1.363.565.5.51 1.007 1.016 1.513 1.521l.79.79c.199.2.435.319.717.346.31.03.585-.051.827-.242.06-.046.113-.1.165-.152l.33-.33c.66-.66 1.318-1.318 1.975-1.979a1.68 1.68 0 01.925-.486c.1-.018.201-.02.302-.02h.676l.03.001c.023.002.045.003.064-.003.136-.047.216.029.303.117.557.563 1.117 1.122 1.677 1.682.357.356.593.776.682 1.272.145.81-.05 1.533-.618 2.129-.401.421-.815.832-1.228 1.242-.2.197-.398.395-.596.594-.04.04-.078.06-.135.043a.34.34 0 00-.113-.01h-.76a1.64 1.64 0 01-1.207-.506l-1.003-1.004-1.336-1.338a1.148 1.148 0 00-.881-.356 1.114 1.114 0 00-.785.33c-.235.233-.469.467-.702.702l-.605.605-1.057 1.06a1.69 1.69 0 01-1.25.52H2.79c-.009 0-.018 0-.026-.002-.02-.001-.04-.002-.057.003-.116.034-.184-.028-.26-.105-.565-.57-1.134-1.139-1.702-1.707A2.417 2.417 0 01.06 8.453C.054 8.417.049 8.38.044 8.344l-.007-.042.002-.035C.042 8.215.045 8.163 0 8.12c.003-.111.003-.221.003-.332zm3.43 4.466h-.15c.023.048.051.073.076.097l.018.017 2.212 2.215.212.215c.181.183.363.367.55.544.424.404.934.623 1.517.655A2.341 2.341 0 009.71 15.3c.763-.757 1.52-1.518 2.279-2.279l.711-.714.011-.01c.017-.012.035-.027.023-.06l-.104-.001h-.212a2.36 2.36 0 01-1.631-.719A1315.072 1315.072 0 008.5 9.229l-.01-.012c-.027-.027-.054-.055-.082-.08a.44.44 0 00-.385-.1.516.516 0 00-.27.158c-.767.77-1.535 1.54-2.304 2.308a2.342 2.342 0 01-1.75.751h-.267z"
        clipRule="evenodd"
      ></path>
      <defs>
        <clipPath id="clip0">
          <path fill="#FFF" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
