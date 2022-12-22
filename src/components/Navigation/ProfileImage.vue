<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-full object-contain"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://64.media.tumblr.com/32c356e67d5cdd6e3f2ab4d4cf3b6fce/tumblr_ntb2c29J7Z1uzn48xo3_640.jpg",
    };
  },
};
</script>
