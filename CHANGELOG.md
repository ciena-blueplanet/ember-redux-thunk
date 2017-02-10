# 1.1.2

* **Fixed** build to publish.

# 1.1.1

* **Upgraded** to test against Ember 2.11.


# 1.1.0

* **Added** more Ember versions to CI builds to ensure addon is working with latest versions of Ember.
* **Fixed** ESLint warnings coming from latest `eslint-config-frost-standard`.
* **Upgraded** to `redux-thunk` version `2.2.0`.
* **Upgraded** all `devDependencies` to latest versions.


# 1.0.0

* **Removed** unnecessary files from npm package so the package is slightly smaller to pull down. The package from npm will now contain the following:

  *  `blueprints/`
     * `ember-redux-thunk-shim/`
       * `index.js`
  * `CHANGELOG.md`
  * `index.js`
  * `LICENSE.md`
  * `packag.json`
  * `README.md`

# 0.0.6

* **Fixed** blueprints directory so blueprints will run.


# 0.0.5

* **Removed** `.pullapprove.yml` since PullApprove is not used on this repo.


# 0.0.4

* **Updated** [license](LICENSE) to attribute `ember-redux` instead of `Ciena`.


# 0.0.3

* **Updated** Travis config to publish as npm user `ember-redux`.


# 0.0.2

* **Renamed** repository from `ember-redux-thunk` to `ember-redux-thunk-shim`.


# 0.0.1

* Initialize addon and wire up to CI so it publishes to npm.



