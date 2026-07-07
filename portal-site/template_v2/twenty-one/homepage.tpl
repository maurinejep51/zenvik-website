{if !$loggedin}
    <div class="zt-guest-home">
    <section class="zt-portal-hero" aria-labelledby="zt-portal-hero-title">
        <div class="zt-portal-hero__bg" aria-hidden="true">
            <span class="zt-portal-hero__glow zt-portal-hero__glow--one"></span>
            <span class="zt-portal-hero__glow zt-portal-hero__glow--two"></span>
            <span class="zt-portal-hero__node zt-portal-hero__node--one"></span>
            <span class="zt-portal-hero__node zt-portal-hero__node--two"></span>
            <span class="zt-portal-hero__node zt-portal-hero__node--three"></span>
            <span class="zt-portal-hero__node zt-portal-hero__node--four"></span>
        </div>

        <div class="zt-portal-hero__inner">
            <div class="zt-portal-hero__content">
                <div class="zt-portal-hero__eyebrow">
                    <span>CUSTOMER PORTAL</span>
                </div>

                <h1 id="zt-portal-hero-title" class="zt-portal-hero__title">
                    Manage Your Services with Confidence
                </h1>

                <div class="zt-portal-hero__copy">
                    <p>
                        Securely Access your services, invoices, support tickets, account details, and customer care tools whenever you need it.
                    </p>
                </div>

                <div class="zt-portal-hero__actions" aria-label="Customer portal actions">
                    <a class="zt-portal-hero__button zt-portal-hero__button--primary" href="{$WEB_ROOT}/clientarea.php">
                        Login
                    </a>
                    <a class="zt-portal-hero__button zt-portal-hero__button--secondary" href="{$WEB_ROOT}/register.php">
                        Create Account
                    </a>
                </div>
            </div>

            <div class="zt-portal-hero__visual" aria-label="Customer portal account overview illustration">
                <div class="zt-portal-mobile-illustration">
                    <img src="{$WEB_ROOT}/hero.png" alt="Zenvik customer portal illustration">
                </div>

                <div class="zt-portal-card">
                    <div class="zt-portal-card__toolbar" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="zt-portal-card__nav" aria-hidden="true">
                        <span class="zt-portal-card__nav-item zt-portal-card__nav-item--active">Account</span>
                        <span class="zt-portal-card__nav-item">Billing</span>
                        <span class="zt-portal-card__nav-item">Support</span>
                    </div>

                    <div class="zt-portal-command">
                        <div>
                            <span>Customer Workspace</span>
                            <strong>Account control center</strong>
                        </div>
                        <em>Protected</em>
                    </div>

                    <div class="zt-portal-card__header">
                        <div class="zt-portal-profile">
                            <span class="zt-portal-profile__avatar" aria-hidden="true"></span>
                            <div>
                                <p class="zt-portal-profile__label">Customer Profile</p>
                                <p class="zt-portal-profile__name">Welcome Back</p>
                            </div>
                        </div>
                        <span class="zt-portal-card__status">Secure</span>
                    </div>

                    <div class="zt-portal-metrics">
                        <div class="zt-portal-metric zt-portal-metric--services zt-portal-metric--wide">
                            <span class="zt-portal-metric__icon" aria-hidden="true"><i class="far fa-cubes"></i></span>
                            <span class="zt-portal-metric__label">Managed Services</span>
                            <strong>04 Active</strong>
                            <div class="zt-portal-health" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="zt-portal-metric zt-portal-metric--ticket">
                            <span class="zt-portal-metric__icon" aria-hidden="true"><i class="fal fa-comments"></i></span>
                            <span class="zt-portal-metric__label">Support Tickets</span>
                            <strong>Open</strong>
                        </div>
                        <div class="zt-portal-metric zt-portal-metric--domains">
                            <span class="zt-portal-metric__icon" aria-hidden="true"><i class="fal fa-globe"></i></span>
                            <span class="zt-portal-metric__label">Account Tools</span>
                            <strong>Ready</strong>
                        </div>
                    </div>

                    <div class="zt-portal-security">
                        <span class="zt-portal-security__icon" aria-hidden="true"></span>
                        <div>
                            <span>Account Security</span>
                            <strong>Protected</strong>
                        </div>
                    </div>

                    <div class="zt-portal-quick-actions">
                        <p>Quick Actions</p>
                        <div>
                            <span>Pay Invoice</span>
                            <span>Open Ticket</span>
                            <span>Manage Services</span>
                        </div>
                    </div>

                    <div class="zt-portal-activity">
                        <span aria-hidden="true"></span>
                        <p>Portal ready for account management</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="zt-portal-hero__trust" aria-label="Portal trust highlights">
            <span><i class="fal fa-headset" aria-hidden="true"></i> 24/7 Support</span>
            <span><i class="fal fa-shield-check" aria-hidden="true"></i> Secure Account</span>
            <span><i class="fal fa-bolt" aria-hidden="true"></i> Fast Response</span>
            <span><i class="fal fa-handshake" aria-hidden="true"></i> trusted partner</span>
        </div>
    </section>

    <section class="zt-home-section zt-home-section--white" aria-labelledby="zt-customer-center-title">
        <div class="zt-section-heading">
            <span class="zt-section-kicker">ACCOUNT CENTER</span>
            <h2 id="zt-customer-center-title">Everything You Need in One Customer Center</h2>
            <p>
                Quickly access your account, services, billing, support requests and helpful resources from one secure place.
            </p>
        </div>

        <div class="zt-action-grid">
            <a class="zt-action-card" href="clientarea.php">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-user-circle"></i></span>
                <span class="zt-action-card__label">Your Account</span>
                <span class="zt-action-card__meta">View your client area</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="zt-action-card" href="clientarea.php?action=services">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="far fa-cubes"></i></span>
                <span class="zt-action-card__label">Manage Services</span>
                <span class="zt-action-card__meta">Review active services</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            {if $registerdomainenabled || $transferdomainenabled || $numberOfDomains}
                <a class="zt-action-card" href="clientarea.php?action=domains">
                    <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-globe"></i></span>
                    <span class="zt-action-card__label">Manage Domains</span>
                    <span class="zt-action-card__meta">Access domain records</span>
                    <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
                </a>
            {/if}
            <a class="zt-action-card" href="supporttickets.php">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-comments"></i></span>
                <span class="zt-action-card__label">Support Requests</span>
                <span class="zt-action-card__meta">Track ticket history</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="zt-action-card" href="clientarea.php?action=masspay&all=true">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-credit-card"></i></span>
                <span class="zt-action-card__label">Make a Payment</span>
                <span class="zt-action-card__meta">Handle outstanding billing</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="zt-action-card" href="{routePath('knowledgebase-index')}">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-book"></i></span>
                <span class="zt-action-card__label">Knowledgebase</span>
                <span class="zt-action-card__meta">Find helpful answers</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="zt-action-card" href="serverstatus.php">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-server"></i></span>
                <span class="zt-action-card__label">Network Status</span>
                <span class="zt-action-card__meta">Check service updates</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="zt-action-card" href="submitticket.php">
                <span class="zt-action-card__icon" aria-hidden="true"><i class="fal fa-life-ring"></i></span>
                <span class="zt-action-card__label">Submit a Ticket</span>
                <span class="zt-action-card__meta">Request support</span>
                <span class="zt-action-card__arrow" aria-hidden="true">&rarr;</span>
            </a>
        </div>
    </section>

    <section class="zt-home-section zt-home-section--split" aria-labelledby="zt-care-title">
        <div class="zt-split-panel">
            <div>
                <span class="zt-section-kicker">AFTER-PURCHASE CARE</span>
                <h2 id="zt-care-title">Clear Billing. Faster Support. Better Control.</h2>
                <p>
                    The Zenvik portal keeps customer care organized after purchase, from invoices and renewals to support tickets, service management and account security.
                </p>
                <div class="zt-care-prompt">
                    <span>Planning another website?</span>
                    <a href="https://zenviktechnologies.com/hosting-cloud-services">Explore reliable hosting from Zenvik &rarr;</a>
                </div>
            </div>

            <div class="zt-confidence-list">
                <div>
                    <strong>Billing clarity</strong>
                    <span>Keep invoices, renewals and payment actions easy to find.</span>
                </div>
                <div>
                    <strong>Support visibility</strong>
                    <span>Open, review and follow up on customer support tickets.</span>
                </div>
                <div>
                    <strong>Account security</strong>
                    <span>Use the client area to manage profile and service access.</span>
                </div>
            </div>
        </div>
    </section>

    <section class="zt-home-section zt-home-section--white" aria-labelledby="zt-help-title">
        <div class="zt-section-heading zt-section-heading--left">
            <span class="zt-section-kicker">HELP & RESOURCES</span>
            <h2 id="zt-help-title">Find Help Before You Need to Wait</h2>
            <p>
                Use customer resources for quick answers, service notices and guided support.
            </p>
        </div>

        <div class="zt-resource-row">
            <a href="{routePath('knowledgebase-index')}">
                <span class="zt-resource-icon" aria-hidden="true"><i class="fal fa-book"></i></span>
                <strong>Knowledgebase</strong>
                <span>Browse common questions and portal guidance.</span>
            </a>
            <a href="{routePath('download-index')}">
                <span class="zt-resource-icon" aria-hidden="true"><i class="fal fa-download"></i></span>
                <strong>Downloads</strong>
                <span>Access available files and customer resources.</span>
            </a>
            <a href="{routePath('announcement-index')}">
                <span class="zt-resource-icon" aria-hidden="true"><i class="fal fa-bullhorn"></i></span>
                <strong>Announcements</strong>
                <span>Read important customer notices.</span>
            </a>
            <a href="serverstatus.php">
                <span class="zt-resource-icon" aria-hidden="true"><i class="fal fa-server"></i></span>
                <strong>Network Status</strong>
                <span>Check infrastructure and service updates.</span>
            </a>
            <a href="submitticket.php">
                <span class="zt-resource-icon" aria-hidden="true"><i class="fal fa-life-ring"></i></span>
                <strong>Open Ticket</strong>
                <span>Contact support when you need direct help.</span>
            </a>
        </div>
    </section>

    <section class="zt-home-section zt-home-section--prompt" aria-labelledby="zt-hosting-prompt-title">
        <div class="zt-prompt-panel">
            <span class="zt-section-kicker">ONE NEXT STEP</span>
            <h2 id="zt-hosting-prompt-title">Hosting Has Never Been This Affordable.</h2>
            <p>
                Planning another website? Explore reliable hosting from Zenvik on the main website when you are ready to compare options.
            </p>
            <a class="zt-prompt-link" href="https://zenviktechnologies.com/hosting-cloud-services">
                Explore Hosting &rarr;
            </a>
        </div>
    </section>

    <section class="zt-home-section zt-home-section--final" aria-labelledby="zt-support-title">
        <div class="zt-final-cta">
            <div>
                <span class="zt-section-kicker">CUSTOMER SUPPORT</span>
                <h2 id="zt-support-title">Need Help With Your Account?</h2>
                <p>
                    Sign in to review your services, open a support ticket, or contact Zenvik support directly.
                </p>
            </div>
            <div class="zt-final-actions">
                <a class="zt-final-button zt-final-button--primary" href="{$WEB_ROOT}/clientarea.php">Login to Portal</a>
                <a class="zt-final-button zt-final-button--outline" href="submitticket.php">Open a Ticket</a>
                <a class="zt-final-button zt-final-button--text" href="mailto:support@zenviktechnologies.com">Email Support</a>
            </div>
        </div>
    </section>
    </div>
{else}
    {if !empty($productGroups) || $registerdomainenabled || $transferdomainenabled}
        <h2 class="text-center m-4">{lang key='clientHomePanels.productsAndServices'}</h2>

        <div class="card-columns home">
            {foreach $productGroups as $productGroup}

                <div class="card mb-3">
                    <div class="card-body p-lg-4 p-xl-5 text-center">
                        <h3 class="card-title pricing-card-title">
                            {$productGroup->name}
                        </h3>
                        <p>{$productGroup->tagline}</p>
                        <a href="{$productGroup->getRoutePath()}" class="btn btn-block btn-outline-primary">
                            {lang key='browseProducts'}
                        </a>
                    </div>
                </div>

            {/foreach}

            {if $registerdomainenabled}
                <div class="card mb-3">
                    <div class="card-body p-lg-4 p-xl-5 text-center">
                        <h3 class="card-title pricing-card-title">
                            {lang key='orderregisterdomain'}
                        </h3>
                        <p>{lang key='secureYourDomain'}</p>
                        <a href="{$WEB_ROOT}/cart.php?a=add&domain=register" class="btn btn-block btn-outline-primary">
                            {lang key='navdomainsearch'}
                        </a>
                    </div>
                </div>
            {/if}
            {if $transferdomainenabled}
                <div class="card mb-3">
                    <div class="card-body p-lg-4 p-xl-5 text-center">
                        <h3 class="card-title pricing-card-title">
                            {lang key='transferYourDomain'}
                        </h3>
                        <p>{lang key='transferExtend'}</p>
                        <a href="{$WEB_ROOT}/cart.php?a=add&domain=transfer" class="btn btn-block btn-outline-primary">
                            {lang key='transferYourDomain'}
                        </a>
                    </div>
                </div>
            {/if}
        </div>
    {/if}

    <h2 class="text-center m-4">{lang key='howCanWeHelp'}</h2>

    <div class="row my-5 action-icon-btns">
        <div class="col-6 col-md-4 col-lg">
            <a href="{routePath('announcement-index')}" class="card-accent-teal">
                <figure class="ico-container">
                    <i class="fal fa-bullhorn"></i>
                </figure>
                {lang key='announcementstitle'}
            </a>
        </div>
        <div class="col-6 col-md-4 col-lg">
            <a href="serverstatus.php" class="card-accent-pomegranate">
                <figure class="ico-container">
                    <i class="fal fa-server"></i>
                </figure>
                {lang key='networkstatustitle'}
            </a>
        </div>
        <div class="col-6 col-md-4 col-lg">
            <a href="{routePath('knowledgebase-index')}" class="card-accent-sun-flower">
                <figure class="ico-container">
                    <i class="fal fa-book"></i>
                </figure>
                {lang key='knowledgebasetitle'}
            </a>
        </div>
        <div class="col-6 col-md-4 offset-md-2 offset-lg-0 col-lg">
            <a href="{routePath('download-index')}" class="card-accent-asbestos">
                <figure class="ico-container">
                    <i class="fal fa-download"></i>
                </figure>
                {lang key='downloadstitle'}
            </a>
        </div>
        <div class="col-6 offset-3 offset-md-0 col-md-4 col-lg">
            <a href="submitticket.php" class="card-accent-green">
                <figure class="ico-container">
                    <i class="fal fa-life-ring"></i>
                </figure>
                {lang key='homepage.submitTicket'}
            </a>
        </div>
    </div>

    <h2 class="text-center m-4">{lang key='homepage.yourAccount'}</h2>

    <div class="row my-5 action-icon-btns">
        <div class="col-6 col-md-4 col-lg">
            <a href="clientarea.php" class="card-accent-midnight-blue">
                <figure class="ico-container">
                    <i class="fal fa-home"></i>
                </figure>
                {lang key='homepage.yourAccount'}
            </a>
        </div>
        <div class="col-6 col-md-4 col-lg">
            <a href="clientarea.php?action=services" class="card-accent-midnight-blue">
                <figure class="ico-container">
                    <i class="far fa-cubes"></i>
                </figure>
                {lang key='homepage.manageServices'}
            </a>
        </div>
        {if $registerdomainenabled || $transferdomainenabled || $numberOfDomains}
            <div class="col-6 col-md-4 col-lg">
                <a href="clientarea.php?action=domains" class="card-accent-midnight-blue">
                    <figure class="ico-container">
                        <i class="fal fa-globe"></i>
                    </figure>
                    {lang key='homepage.manageDomains'}
                </a>
            </div>
        {/if}
        <div class="col-6 col-md-4 offset-md-2 offset-lg-0 col-lg">
            <a href="supporttickets.php" class="card-accent-midnight-blue">
                <figure class="ico-container">
                    <i class="fal fa-comments"></i>
                </figure>
                {lang key='homepage.supportRequests'}
            </a>
        </div>
        <div class="col-6 offset-3 offset-md-0 col-md-4 col-lg">
            <a href="clientarea.php?action=masspay&all=true" class="card-accent-midnight-blue">
                <figure class="ico-container">
                    <i class="fal fa-credit-card"></i>
                </figure>
                {lang key='homepage.makeAPayment'}
            </a>
        </div>
    </div>
{/if}
