<template>
  <div class="calendar">
    <Page title="Calendário">
      <iframe src="http://bit.do/calendar-sonar"
              style="border-width:0; margin: auto; display:block"
              width="800" height="500"
              frameborder="0"
              scrolling="no">
      </iframe>
    </Page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  components: {
    Page,
  },
};
</script>
