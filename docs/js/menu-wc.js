'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' :
                                            'id="xs-controllers-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' :
                                        'id="xs-injectables-links-module-AppModule-4bedf4923837ab94291a0310dfb1c2bea9e4a623be4e70779a59f7c48f5bdb144975b339200429d71f7a279b2925b8e0d36f6d5f73d5e52d903d1d3fb3943c10"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' :
                                            'id="xs-controllers-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' :
                                        'id="xs-injectables-links-module-PostsModule-052c3cb929341a3161751e129271dccd62eadcd5b55c9d58943b25eff3fce6a346bac69dde09e4a5e2dcc0228478dea1d1cf0e3722f983987ca6ab9e3e4bf890"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' :
                                            'id="xs-controllers-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' :
                                        'id="xs-injectables-links-module-UsersModule-02250a6b1733c190abfe3ac7695fd99085d9005d203dc11112c6ed234b9c9fa76f217e64059ee0f6bbcd606cb8780a3651780e527bf8c4b81749462d5de93652"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});