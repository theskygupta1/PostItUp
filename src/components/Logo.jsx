const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 140"
      width="260"
      height="80"
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b" />
          <feOffset in="b" dx="0" dy="3" result="o" />
          <feMerge>
            <feMergeNode in="o" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sticky Note Icon */}
      <g transform="translate(18,12)" filter="url(#shadow)">
        <path
          d="M0 0 h84 a12 12 0 0 1 12 12 v84 a12 12 0 0 1 -12 12 h-60 a12 12 0 0 1 -12 -12 v-96 z"
          fill="#FFEB3B"   // bright yellow
        />
        <path
          d="M84 0 v24 a12 12 0 0 1 -12 12 h-24 z"
          fill="#FDD835"
        />
        <path
          d="M60 0 L84 24"
          stroke="#FBC02D"
          strokeWidth="2"
          opacity="0.9"
          strokeLinecap="round"
        />

        {/* Circle P */}
        <g transform="translate(16,20)">
          <circle cx="12" cy="12" r="12" fill="#000000" opacity="0.85" />
          <text
            x="12"
            y="17"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="14"
            textAnchor="middle"
            fill="#FFEB3B"
            fontWeight="700"
          >
            P
          </text>
        </g>
      </g>

      {/* Text */}
      <g transform="translate(130,78)">
        <text
          x="0"
          y="-10"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="44"
          fontWeight="700"
          letterSpacing="1"
        >
          <tspan fill="#FFFFFF">post</tspan>
          <tspan fill="#FF5722">It</tspan>
          <tspan fill="#FFFFFF">Up</tspan>
        </text>

        <text
          x="0"
          y="18"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="12"
          fill="#BBBBBB"
        >
          create • share
        </text>
      </g>
    </svg>
  );
};

export default Logo;
