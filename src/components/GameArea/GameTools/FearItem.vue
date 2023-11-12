<template>
  <div class="fear-item">
    <div class="fear-item--moving">
      <svg
        version="1.1"
        id="svg1986"
        xml:space="preserve"
        viewBox="0 0 682.66669 682.66669"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs1990">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2000">
            <path d="M 0,512 H 512 V 0 H 0 Z" id="path1998" />
          </clipPath>
        </defs>
        <g id="g1992" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g1994">
            <g id="g1996" clip-path="url(#clipPath2000)">
              <g id="g2002" transform="translate(368.4668,100.6836)">
                <path
                  d="m 0,0 c 0,-11.828 -9.589,-21.417 -21.417,-21.417 h -182.1 c -11.828,0 -21.417,9.589 -21.417,21.417 v 0.006 c 0,41.381 33.597,74.977 74.978,74.977 h 74.978 C -33.597,74.983 0,41.387 0,0.006 Z"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2004"
                />
              </g>
              <g id="g2006" transform="translate(159.5996,497)">
                <path
                  d="M 0,0 H 192.801 C 272.607,0 337.4,-64.793 337.4,-144.6 v -192.8 c 0,-79.806 -64.792,-144.598 -144.599,-144.6 H 0 c -79.807,0 -144.6,64.793 -144.6,144.6 v 192.8 C -144.6,-64.793 -79.807,0 0,0 Z"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2008"
                />
              </g>
              <g id="g2010" transform="translate(79.2666,256)">
                <path
                  d="m 0,0 c 0,0 -64.267,-67.313 -64.267,-112.467 0,-35.47 28.797,-64.266 64.267,-64.266 35.47,0 64.267,28.796 64.267,64.266 C 64.267,-67.313 0,0 0,0 Z"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2012"
                />
              </g>
              <g id="g2014" transform="translate(151.5664,432.7334)">
                <path
                  d="m 0,0 c 0,0 -0.001,-0.002 -0.001,-0.005 -10.26,-25.646 -30.581,-45.969 -56.228,-56.226 l -0.004,-0.002"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2016"
                />
              </g>
              <g id="g2018" transform="translate(360.4336,432.7334)">
                <path
                  d="m 0,0 c 0,0 0.001,-0.002 0.001,-0.005 10.259,-25.646 30.581,-45.969 56.228,-56.226 0.002,-10e-4 0.004,-0.002 0.004,-0.002"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2020"
                />
              </g>
              <g id="g2022" transform="translate(159.5996,336.333)">
                <path
                  d="m 0,0 c 17.734,0 32.134,-14.397 32.134,-32.133 0,-17.735 -14.4,-32.134 -32.134,-32.134 -17.734,0 -32.133,14.399 -32.133,32.134 C -32.133,-14.397 -17.734,0 0,0 Z"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2024"
                />
              </g>
              <g id="g2026" transform="translate(352.4004,336.333)">
                <path
                  d="m 0,0 c 17.734,0 32.133,-14.397 32.133,-32.133 0,-17.735 -14.399,-32.134 -32.133,-32.134 -17.735,0 -32.134,14.399 -32.134,32.134 C -32.134,-14.397 -17.735,0 0,0 Z"
                  style="
                    fill: none;
                    stroke: #000000;
                    stroke-width: 30;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                    stroke-dasharray: none;
                    stroke-opacity: 1;
                  "
                  id="path2028"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const speed = (Math.random() * 3) + 0.75;
    const delay = Math.floor(Math.random() * 5) + 1;
    return {speed, delay}
  }
  // ;
};
</script>

<style lang="scss" scoped>
.fear-item {
  // display: flex;
  // flex-direction: column;
  width: 200px;
  height: 320px;
}
.fear-item--moving {
  width: 200px;
  height: 200px;
  // margin-top: 300px;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
  animation: slideOut infinite ease;
  animation-duration: calc(v-bind(speed) * 1s);
  animation-delay: calc(v-bind(delay) * 1s);
}

@keyframes slideOut {
  50% {
    transform: translate(0, 100%);
  }
}
</style>
