
                </div><!-- /.main-content -->
                {if !$inShoppingCart && $secondarySidebar->hasChildren()}
                    <div class="col-md-3 pull-md-left sidebar sidebar-secondary">
                        {include file="$template/includes/sidebar.tpl" sidebar=$secondarySidebar}
                    </div>
                {/if}
            <div class="clearfix"></div>
        </div>
    </div>
</section>

<section id="footer" class="zt-template-footer">
    <div class="container">
        <div class="zt-footer-grid">
            <div class="zt-footer-column zt-footer-brand-block">
                <a href="{$WEB_ROOT}/index.php" class="zt-footer-brand">
                    <img src="{$WEB_ROOT}/templates/{$template}/img/logo.png" alt="{$companyname}">
                </a>
                <p>Zenvik Technologies Ltd delivers hosting, domains, software, websites, branding, and ICT support for growing businesses.</p>
                <p class="zt-footer-readiness">Kenya-based support. International-ready standards.</p>
                <a class="zt-whatsapp-btn" href="https://wa.me/254717990272" target="_blank" rel="noopener">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp Support
                </a>
            </div>
            <div class="zt-footer-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="{$WEB_ROOT}/cart.php">Hosting &amp; Cloud</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">Software Development</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">Website Development</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">Marketing &amp; Branding</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">ICT Services</a></li>
                </ul>
                <h3 class="zt-footer-subheading">Hosting</h3>
                <ul>
                    <li><a href="{$WEB_ROOT}/cart.php">Web Hosting</a></li>
                    <li><a href="{$WEB_ROOT}/cart.php">VPS Hosting</a></li>
                    <li><a href="{$WEB_ROOT}/cart.php">Email Hosting</a></li>
                    <li><a href="{$WEB_ROOT}/cart.php">Reseller Hosting</a></li>
                    <li><a href="{$WEB_ROOT}/store/ssl">SSL Certificates</a></li>
                </ul>
            </div>
            <div class="zt-footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="{$WEB_ROOT}/index.php">Home</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">Our Services</a></li>
                    <li><a href="https://zenviktechnologies.com/#portfolio">Portfolio</a></li>
                    <li><a href="{$WEB_ROOT}/clientarea.php">Client Portal</a></li>
                    <li><a href="{$WEB_ROOT}/contact.php">Contact</a></li>
                    <li><a href="{routePath('knowledgebase-index')}">Knowledgebase</a></li>
                    <li><a href="{$WEB_ROOT}/submitticket.php">Open Ticket</a></li>
                </ul>
            </div>
            <div class="zt-footer-column">
                <h3>Get In Touch</h3>
                <ul class="zt-footer-contact">
                    <li><span>Phone</span><a href="tel:+254717990272">+254 717 990 272</a></li>
                    <li><span>WhatsApp</span><a href="https://wa.me/254717990272" target="_blank" rel="noopener">+254 717 990 272</a></li>
                    <li><span>Email</span><a href="mailto:info@zenviktechnologies.com">info@zenviktechnologies.com</a></li>
                    <li><span>Support</span><a href="mailto:support@zenviktechnologies.com">support@zenviktechnologies.com</a></li>
                    <li><span>Hosting</span><a href="mailto:hosting@zenviktechnologies.com">hosting@zenviktechnologies.com</a></li>
                </ul>
                <ul class="zt-footer-social">
                    <li><a href="https://www.facebook.com/zenviktechnologies/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/zenvik-technologies-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.instagram.com/zenviktechnologies/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://x.com/ZenvikTech" target="_blank" rel="noopener" aria-label="X/Twitter"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.tiktok.com/@zenviktechnologies" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="zt-footer-bottom">
            <p>&copy; 2026 Zenvik Technologies Ltd. All Rights Reserved.</p>
            <div class="zt-footer-legal">
                <a href="https://zenviktechnologies.com/privacy-policy">Privacy Policy</a>
                <a href="https://zenviktechnologies.com/terms-and-conditions">Terms &amp; Conditions</a>
            </div>
            <a href="#" class="back-to-top"><i class="fas fa-chevron-up"></i></a>
        </div>
    </div>
</section>

<div class="modal system-modal fade" id="modalAjax" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content panel-primary">
            <div class="modal-header panel-heading">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">{$LANG.close}</span>
                </button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body panel-body">
                {$LANG.loading}
            </div>
            <div class="modal-footer panel-footer">
                <div class="pull-left loader">
                    <i class="fas fa-circle-notch fa-spin"></i>
                    {$LANG.loading}
                </div>
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    {$LANG.close}
                </button>
                <button type="button" class="btn btn-primary modal-submit">
                    {$LANG.submit}
                </button>
            </div>
        </div>
    </div>
</div>

{include file="$template/includes/generate-password.tpl"}

{$footeroutput}

</body>
</html>
