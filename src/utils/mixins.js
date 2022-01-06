import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      if (!dateTime) return "-";
      return moment(dateTime).fromNow();
    },
  },
};

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return (
        src ||
        "https://pica.zhimg.com/80/v2-6afa72220d29f045c15217aa6b275808_720w.jpg?source=1940ef5c"
      );
    },
  },
};
