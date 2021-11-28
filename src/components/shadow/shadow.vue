<template>
    <div>111</div>
</template>

<script>
export default {};
</script>

<style scope>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, pink, hotpink);
}

body::before {
  width: 50vmin;
  height: 50vmin;
  content: "";
  background-image: linear-gradient(135deg, slateblue, HotPink);
  border-radius: 30vmin 70vmin 53vmin 47vmin / 26vmin 46vmin 54vmin 74vmin;
  box-shadow: 0 -2vmin 3vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
    0 -2vmin 7vmin purple inset;
  animation: anim 30s infinite;
  display: inline-block;
  filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid)
    drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue)
    drop-shadow(0 0 7vmin MediumOrchid);
  position: relative;
  top: 0;
}

@keyframes anim {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
    box-shadow: 0 -2vmin 3vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 -2vmin 7vmin purple inset;
  }

  10% {
    border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
  }

  20% {
    border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
  }

  30% {
    border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
    box-shadow: -1vmin -2vmin 3vmin LightPink inset,
      -1vmin -2vmin 4vmin MediumPurple inset, 1vmin -1vmin 7vmin purple inset;
  }

  40% {
    border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
  }

  50% {
    border-radius: 100%;
    box-shadow: 0 2vmin 3vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 2vmin 7vmin purple inset;
  }

  60% {
    border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
  }

  70% {
    border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
    box-shadow: 1vmin 1vmin 4vmin LightPink inset,
      2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 5vmin purple inset;
  }

  80% {
    border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
  }

  90% {
    border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
  }
}
</style>