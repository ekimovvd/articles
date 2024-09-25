import { defineStore } from "pinia";

export const useViewedArticlesStore = defineStore("viewedArticles", {
  state: () => ({
    viewedArticles: JSON.parse(
      localStorage.getItem("viewedArticles") || "[]"
    ) as string[],
  }),

  actions: {
    addArticle(articleId: string) {
      if (!this.viewedArticles.includes(articleId)) {
        this.viewedArticles.push(articleId);

        this.saveToLocalStorage();
      }
    },

    saveToLocalStorage() {
      localStorage.setItem(
        "viewedArticles",
        JSON.stringify(this.viewedArticles)
      );
    },
  },
});
