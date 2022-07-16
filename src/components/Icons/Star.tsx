type StarProps = {
  width?: number;
  height?: number;
};

export function Star({ width = 28, height = 28 }: StarProps) {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className="IconPrimeStar"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#fff"
        d="M13.036.77c-.462 1.433-.864 2.64-1.235 3.854-.104.343-.345.488-.62.648-.512.297-.92.614-.68 1.355.24.737.724 1.049 1.403.922.583-.109.963.084 1.368.435.828.718 1.685 1.407 2.728 2.273-1.577 0-2.897-.002-4.218 0-.367 0-.511-.324-.747-.515-.443-.356-.86-.465-1.382-.088-.51.369-.77.78-.467 1.367.349.677.236 1.286-.061 1.948-.413.917-.744 1.869-1.2 3.029-.483-1.492-.89-2.752-1.303-4.01-.116-.354.153-.586.25-.871.168-.487.21-.918-.268-1.298-.476-.378-1.028-.613-1.447-.15-.717.797-1.577.629-2.438.59-.815-.037-1.633-.117-2.719-.196 1.288-.926 2.396-1.726 3.51-2.519.184-.131.383.002.576.016.546.04 1.067.081 1.33-.6.267-.691.196-1.299-.461-1.612-.701-.334-.855-.904-1.01-1.546-.232-.983-.5-1.956-.807-3.136 1.223.891 2.273 1.662 3.327 2.425.286.208.316.512.381.822.103.485.243.936.881.97.654.032 1.295-.073 1.39-.799.127-.967.79-1.355 1.497-1.779.751-.453 1.483-.938 2.422-1.535zM8.046 6.8c-.5.016-.79.29-.805.729-.015.49.293.79.803.773.465-.015.733-.297.73-.76-.005-.468-.301-.7-.729-.742z"
      ></path>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(0 .666)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}