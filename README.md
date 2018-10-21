# Dirt Rag 2018

This is a child WordPress theme of [mh-magazine](https://www.mhthemes.com/themes/mh/magazine/) customized for Rotating Mass Media in mid-to-late 2018. It includes a slew of homepage UX improvements, typographic and visual enhancements, and essentially paves the way for a full redesign using WordPress as a [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system). It's written in (Vue)[https://vuejs.org/] and utilizes a Vuex store for asynchronous content requests to the WP-JSON API, a Vue router, and webpack for loading and bundling.

## Overview

In June 2018, the Dirt Rag editorial team selected some visual and UX updates to the existing Dirt Rag Magazine site. These updates did not necessitate a full rewrite, but we wanted to lay some technical groundwork with some tangible benefits for end users.

We landed on a hybrid model in which we mount a Vue application into a static PHP page, which lives within a WordPress theme. This means we can do all the plumbing work we need to without disrupting the existing day-to-day operations at RMM or—somewhat more importantly—rewriting the entire site in a new language and potentially confusing readers.

The `standalone-app` branch demonstrates a completely headless approach to authoring a custom client application for a content service, which is the approach we want to take for the full Dirt Rag redesign.

## Components

### Vue router, views, and store

There is only one route in our app, `/`, which mounts the `HomeView` view. (In a future version, there are shared `Header` and `Advertising` components which live outside the router, and the router mounts views for all the typical WordPress routes.)

The `HomeView` view consists of a `FeaturedPost`, a `ContestSplice`, and a grid of `PostList` components. The grid is laid out with CSS grids. Each `PostList` has a required `category` prop, which accepts a WordPress category slug.

The Vuex store is responsible for fetching data from the WordPress API. As components are created, they fire an event, which the store catches and handles. Data in the store is not directly manipulated—all asynchronous actions are handled with `actions`, which dispatch a `commit`, which _then_ manipulates the store data. All components reference data in the store directly—there is no event-based inter-op. Components hydrate themselves when the appropriate data becomes available. There is a const (`host`, defined outside the store) which lets the developer debug the app by prepending a production domain to all requests. This could come in handy later as we move the content service off to its own subdomain.

### Vue components

- `Spinner` is a basic spinner. Usually shown and hidden with a `v-if` inline conditional and a `dataLoaded` flag at the component level, typically computed by watching the store for a specific key-value length.
- `PostList` is a list of `Post`s. Takes a `category` as a prop, which tells the Vuex store to get posts with that category slug. Paginates with two requests. (Unfortunately, the header text uses a computed property, which subscribes to the corresponding mutation in the store when this category is loaded. This is bad form!)
- `Post` is an iteratee in the `PostList` component. It receives all its props from the parent component and is therefore unable to be used in a standalone setting. This is probably fine.
- `FeaturedPost` references the most recent WP post that has the `featuredPost` meta field set to `true` and formats it appropriately.
- `ContestSplice` references the most recent WP post in the `contests` category and formats it appropriately.

### Recycled PHP pages

Due to our interim Vue-in-WP hybrid model, there are still some PHP files originating from the parent `mh-magazine` theme which we're reusing. In a future version of the app, we build the custom API functionality into a plugin and forget about the concept of themes altogether.

- `functions.php` contains some custom fields for posts and API behaviors.
- `header.php` is a pretty standard WordPress theme header, but includes the Google Page Tag script and the appropriate DoubleClick for Publishers scripts. These commands only fire on pages _other than the home page_; the DFP ad slots mount themselves from Vue components on the home page and in a future version of the app.
- `google-ads.php` contains Google ad slots for DFP ads. This is included on `page.php`, `archive.php`, and `single.php`.
- `page.php`, `archive.php`, and `single.php` reference the hard-coded DFP ad slots above in `google-ads.php`.
- `template-homepage.php` contains the `div` we mount the home page Vue application into.
- `content-list.php` and `content-single.php` contain slots for the Sponsored Post flag and meta.
- `footer.php` includes the built JavaScript assets.

### Other Important Files
- `style.css` contains some new typographic global styles. Depreciated in a future version of the app.

## Build & Deploy Process
_The build process is fairly complicated. Coming soon._

To release, the easiest thing to do is to SSH to your host, clone this repository into the `@/wp-content/themes` directory, and check out the desired release tag. There is no continuous-delivery pipeline for this project (yet).

## Releases

Check the [GitHub Releases](https://github.com/jamesacklin/dirt-rag-2018/releases) page for a high-level version history, or snag [the latest release](https://github.com/jamesacklin/dirt-rag-2018/releases/latest).
