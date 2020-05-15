export default class Favorite {

    /**
     * 
     */
    constructor() {
        // Extract JSON favorite string from local storage
        let favorite = localStorage.getItem('favorite');

        // Parse JSON favorite String to `favs` object
        this.favs = (favorite) ? JSON.parse(favorite) : [];
    }

    /**
     * Getter method for favs
     */
    getFavEntries() {
        return this.favs;
    }

    /**
     * Returns how many total favs are in the favorite
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.favs)) {
            sum += this.favs[key].quantity;
        }
        return sum;
    }

    /**
     * Updates favorite in localstorage
     */
    update() {
        localStorage.setItem('favorite', JSON.stringify(this.favs))
    }

    /**
     * Add a new favEntry of the given slug
     */
    add(slug, quantity = 1) {

        // First see if entry is already present
        let favEntry = this.getFavEntry(slug)

        if (favEntry) {
            // Product is in favorite already; increment quantity by 1
            favEntry.quantity += quantity;

        } else {
            // Product not in favorite, add as new favEntry
            this.favs.push({
                slug: slug,
                quantity: quantity
            });
        }

        this.update();
    }

    /**
     * Remove an favEntry from favs via slug
     */
    remove(slug) {
        let favEntry = this.getFavEntry(slug);

        let favEntryIndex = this.favs.indexOf(favEntry);

        if (favEntry) {
            this.favs.splice(favEntryIndex, 1);
            this.update();
        }
    }

    /**
     * Get an favEntry from favs via slug
     * Returns null if entry does not exist in favs
     */
    getFavEntry(entrySlug) {
        return this.favs.find(({ slug }) => slug === entrySlug) || null;
    }
}