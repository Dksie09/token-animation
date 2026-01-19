export function BoxBack() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse
        cx="100"
        cy="175"
        rx="80"
        ry="15"
        fill="#000000"
        fillOpacity="0.1"
      />

      {/* Back panel */}
      <path
        d="M20 50L100 30L180 50V140C180 145 175 150 170 150H30C25 150 20 145 20 140V50Z"
        fill="#C4956A"
      />

      {/* Inner shadow */}
      <path
        d="M20 50L100 30L180 50V140C180 145 175 150 170 150H30C25 150 20 145 20 140V50Z"
        fill="url(#boxBackInnerShadow)"
        fillOpacity="0.3"
      />

      {/* Left inner flap */}
      <path
  d="M20 50L50 35V55L20 65V50Z"
  fill="#A67B5B"
  transform="translate(42 0) scale(-1 1)"
/>

      {/* Right inner flap */}
      <path
  d="M180 50L150 35V55L180 65V50Z"
  fill="#A67B5B"
  transform="translate(357 0) scale(-1 1)"
/>


      <defs>
        <linearGradient id="boxBackInnerShadow" x1="100" y1="30" x2="100" y2="150">
          <stop stopColor="#8B6914" stopOpacity="0.4" />
          <stop offset="1" stopColor="#D4A574" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BoxFront() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main box body */}
      <path
        d="M20 60V150C20 155 25 160 30 160H170C175 160 180 155 180 150V60H20Z"
        fill="#D4A574"
      />

      {/* Left side shading */}
      <path
        d="M20 60V150C20 155 25 160 30 160H40V60H20Z"
        fill="#C4956A"
      />

      {/* Right side highlight */}
      <path
        d="M160 60V160H170C175 160 180 155 180 150V60H160Z"
        fill="#E5C9A8"
      />

      {/* Horizontal fold line */}
      <path
        d="M25 100H175"
        stroke="#B8956E"
        strokeWidth="1"
        strokeOpacity="0.5"
      />

      {/* Top rim - front edge */}
      <path
  d="M15 55L100 40L185 55L180 65H20L15 55Z"
  fill="#E5C9A8"
  transform="translate(100 125) scale(1.06 -1) translate(-100 0)"
/>


      {/* Top rim shadow */}
      {/* <path
        d="M20 65H180V70H20V65Z"
        fill="#C4956A"
      /> */}

      {/* Left flap */}
      {/* <path
        d="M15 55L20 65L20 45L50 30L55 20L15 55Z"
        fill="#DEB887"
      /> */}
      {/* <path
        d="M15 55L20 65L20 45L50 30L55 20L15 55Z"
        fill="url(#leftFlapShade)"
        fillOpacity="0.3"
      /> */}

      {/* Right flap */}
      {/* <path
        d="M185 55L180 65L180 45L150 30L145 20L185 55Z"
        fill="#DEB887"
      /> */}
      <path
        d="M185 55L180 65L180 45L150 30L145 20L185 55Z"
        fill="url(#rightFlapShade)"
        fillOpacity="0.2"
      />

      {/* Center back flap (visible behind) */}
      {/* <path
        d="M55 20L100 10L145 20L100 40L55 20Z"
        fill="#C4956A"
      /> */}

      {/* Tape strip */}
      {/* <rect
        x="90"
        y="65"
        width="20"
        height="50"
        fill="#8B7355"
        fillOpacity="0.3"
      /> */}

      {/* Box icons/markings */}
      <g opacity="0.3" fill="#8B6914">
        {/* Fragile icon area */}
        <rect x="35" y="120" width="25" height="25" rx="2" stroke="#8B6914" strokeWidth="1" fill="none" />
        <path d="M42 128L48 128L52 138L48 138L48 142L42 142L42 138L38 138L42 128Z" fill="#8B6914" />

        {/* This way up arrows */}
        <rect x="140" y="120" width="25" height="25" rx="2" stroke="#8B6914" strokeWidth="1" fill="none" />
        <path d="M148 140L152 132L156 140" stroke="#8B6914" strokeWidth="2" fill="none" />
        <path d="M152 132V142" stroke="#8B6914" strokeWidth="2" />
      </g>

      <defs>
        <linearGradient id="leftFlapShade" x1="15" y1="55" x2="55" y2="20">
          <stop stopColor="#8B6914" />
          <stop offset="1" stopColor="#DEB887" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rightFlapShade" x1="185" y1="55" x2="145" y2="20">
          <stop stopColor="#8B6914" />
          <stop offset="1" stopColor="#DEB887" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
