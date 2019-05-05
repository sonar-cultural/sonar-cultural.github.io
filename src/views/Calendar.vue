<template>
  <div class="calendar">
    <Page title="Calendário">
      <vue-cal selected-date="2019-05-06"
         :time-from="9 * 60"
         :disable-views="['years', 'year', 'day', 'month']"
         default-view="week"
         hide-weekends
         events-on-month-view="short"
         :events="events"
         style="height: 600px">
      </vue-cal>
    </Page>
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import Page from '@/components/Page.vue';

export default {
  components: {
    Page,
    VueCal,
  },
  data: () => ({
    events: [
      {
        start: '2019-05-10 09:00',
        end: '2019-05-10 11:00',
        title: 'Status Report 2',
      },
    ],
  }),
};
</script>

<style scoped>
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>
