module.exports = {
    getUserData: function () {
        if (window.$cookies.isKey("user")) {
            return window.$cookies.get("user");
        }
    },
    getAuthHeaders: function () {
        const user = this.getUserData();
        if (user != (null || undefined)) {
            this.$apiHeaders["headers"]["Authorization"] = "Bearer " + user.access_token;
        }
        return this.$apiHeaders;
    }
}