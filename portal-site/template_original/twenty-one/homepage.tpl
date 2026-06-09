{if $twitterusername}

    <h2>{$LANG.twitterlatesttweets}</h2>

    <div id="twitterFeedOutput">
        <p class="text-center"><img src="{$BASE_PATH_IMG}/loading.gif" /></p>
    </div>

    <script type="text/javascript" src="{assetPath file='twitter.js'}"></script>

{elseif $announcements}

    <h2>{$LANG.news}</h2>

    {foreach $announcements as $announcement}
        {if $announcement@index < 2}
            <div class="announcement-single">
                <h3>
                    <span class="label label-default">
                        {$carbon->translatePassedToFormat($announcement.rawDate, 'M jS')}
                    </span>
                    <a href="{routePath('announcement-view', $announcement.id, $announcement.urlfriendlytitle)}">{$announcement.title}</a>
                </h3>

                <blockquote>
                    <p>
                        {if $announcement.text|strip_tags|strlen < 350}
                            {$announcement.text}
                        {else}
                            {$announcement.summary}
                            <a href="{routePath('announcement-view', $announcement.id, $announcement.urlfriendlytitle)}" class="label label-warning">{$LANG.readmore} &raquo;</a>
                        {/if}
                    </p>
                </blockquote>

                {if $announcementsFbRecommend}
                    <script>
                        (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) {
                                return;
                            }
                            js = d.createElement(s); js.id = id;
                            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                    </script>
                    <div class="fb-like hidden-sm hidden-xs" data-layout="standard" data-href="{fqdnRoutePath('announcement-view', $announcement.id, $announcement.urlfriendlytitle)}" data-send="true" data-width="450" data-show-faces="true" data-action="recommend"></div>
                    <div class="fb-like hidden-lg hidden-md" data-layout="button_count" data-href="{fqdnRoutePath('announcement-view', $announcement.id, $announcement.urlfriendlytitle)}" data-send="true" data-width="450" data-show-faces="true" data-action="recommend"></div>
                {/if}
            </div>
        {/if}
    {/foreach}
{/if}

<section class="zt-original-home">
    <div class="zt-home-section zt-services-overview">
        <div class="zt-section-heading">
            <span>Services Overview</span>
            <h2>One technology partner for launch, hosting, and growth</h2>
            <p>Bring your website, infrastructure, brand, and digital operations under a single professional support team.</p>
        </div>
        <div class="zt-service-grid">
            <article><i class="fas fa-code"></i><h3>Web &amp; Software Development</h3><p>Business websites, portals, dashboards, and custom software built around practical operations.</p></article>
            <article><i class="fas fa-server"></i><h3>Hosting &amp; Domain Services</h3><p>Reliable hosting, domain registration, transfers, DNS guidance, and SSL setup.</p></article>
            <article><i class="fas fa-envelope"></i><h3>Email Hosting</h3><p>Professional mailbox setup and email hosting support for teams and growing companies.</p></article>
            <article><i class="fas fa-bullhorn"></i><h3>Digital Marketing</h3><p>Campaign-ready digital presence support across search, content, and conversion journeys.</p></article>
            <article><i class="fas fa-pen-nib"></i><h3>Creative &amp; Branding</h3><p>Brand identity, visual systems, and design support for polished customer touchpoints.</p></article>
            <article><i class="fas fa-cloud"></i><h3>Cloud &amp; Business Solutions</h3><p>Cloud hosting, VPS readiness, ICT services, and business technology support.</p></article>
        </div>
    </div>

    <div class="zt-home-section zt-why-section">
        <div class="zt-section-heading">
            <span>Why Choose Zenvik</span>
            <h2>Built for dependable business hosting</h2>
        </div>
        <div class="zt-feature-grid">
            <article><i class="fas fa-bolt"></i><h3>Fast Hosting Performance</h3><p>Optimized hosting foundations for fast websites and dependable daily traffic.</p></article>
            <article><i class="fas fa-shield-alt"></i><h3>Secure Infrastructure</h3><p>Security-first hosting with SSL support, updates, and resilient server practices.</p></article>
            <article><i class="fas fa-headset"></i><h3>Support Ready</h3><p>Access tickets, knowledgebase resources, and direct support when you need help.</p></article>
            <article><i class="fas fa-route"></i><h3>Migration Guidance</h3><p>Move websites, email, DNS, and SSL settings with practical guidance from the Zenvik team.</p></article>
        </div>
    </div>

    <div class="zt-home-section zt-trust-section">
        <div class="zt-section-heading">
            <span>Trusted Readiness</span>
            <h2>Prepared for local teams and international projects</h2>
            <p>Kenya-based support with hosting practices, communication, and service standards suitable for clients beyond one market.</p>
        </div>
        <div class="zt-trust-strip">
            <span>Startups</span>
            <span>SMEs</span>
            <span>Online Stores</span>
            <span>Agencies</span>
            <span>Institutions</span>
        </div>
    </div>

    <div class="zt-final-cta">
        <h2>Ready to host, launch, or improve your digital presence?</h2>
        <p>Talk to Zenvik about hosting, domains, email, software, branding, or managed support.</p>
        <div class="zt-home-actions">
            <a href="{$WEB_ROOT}/cart.php" class="zt-btn zt-btn-primary">Explore Hosting</a>
            <a href="{$WEB_ROOT}/submitticket.php" class="zt-btn zt-btn-secondary">Contact Support</a>
        </div>
    </div>
</section>
