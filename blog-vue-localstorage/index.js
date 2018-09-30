var app = new Vue({
    el: '#app',
    data: {
        colors: ['red', 'green', 'blue'],
        numbers: [1, 2, 3, 4],
        activeColor: 'red',
        activeNumber: 1
    },
    created: function () {
        var loaded = JSON.parse(localStorage.getItem('myDemoPrefs'));
        if (loaded) {
            this.activeColor = loaded.storedColor;
            this.activeNumber = loaded.storedNumber;
        } else {
            console.warn('can\'t load preferences. Maybe your first time here?');
        }
    },
    computed: {
        prefs: function () {
            var p = {
                storedColor: this.activeColor,
                storedNumber: this.activeNumber
            }
            localStorage.setItem('myDemoPrefs', JSON.stringify(p));
            return p;
        }
    }
});