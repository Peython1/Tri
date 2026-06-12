var floater=function(){function a(){var e=document.querySelector(".floater-wrapper");e&&(e.innerHTML=`
            <div class="floater-box">
                <div class="pb-h">
                    <b>É fácil se inscrever!</b>
                    <div>Escolha uma das opções abaixo:</div>
                </div>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','whatsapp')" href="https://api.whatsapp.com/send?phone=5511989511509&text=%5BTicket%20ANH0005%5D%20-%20Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Anhanguera." id="floater-whatsapp-btn" alt="WhatsApp" title="WhatsApp" target="_blank" class="floater-action">
                    <i class="fab fa-whatsapp f-size-20"></i>
                    <span>WhatsApp</span>
                </a>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','nosso-chat')" href="JavaScript:void(0);" id="floater-chat-btn" rel="" alt="Nosso Chat" title="Nosso Chat" target="_self" class="floater-action on-click-open-chat">
                    <i class="fas fa-comment"></i>
                    <span>Nosso Chat</span>
                </a>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','no-0800')" href="tel:08000001686" alt="No 0800-000-1686" title="No 0800-000-1686" target="_self" class="floater-action">
                    <i class="fas fa-phone"></i>
                    <span>No 0800-000-1686</span>
                </a>
                <a role="button" href="javascript:;" onclick="openRegisterModal();fireGA('anhanguera:chat','click:link','aqui-mesmo-no-site')" rel="noopener noreferrer" alt="Aqui mesmo no site" title="Aqui mesmo no site" class="floater-action">
                    <i class="fas fa-pen"></i>
                    <span>Aqui mesmo no site</span>
                </a>
            </div>`,document.getElementById("floater-chat-btn").addEventListener("click",()=>{var e=document.getElementById("blip-chat-open-iframe");e&&!e.classList.contains("opened")&&document.getElementById("dots-cta").click()}))}document.addEventListener("DOMContentLoaded",function(){var e,t;e=document.getElementsByTagName("head")[0],(t=document.createElement("link")).rel="stylesheet",t.type="text/css",t.href="/assets/css/floater.css",t.media="all",e.appendChild(t),document.getElementById("floater-btn").addEventListener("click",()=>{document.getElementById("blip-chat-open-iframe")?.classList?.contains("opened")&&document.getElementById("dots-close-cta").click(),document.querySelector(".floater-wrapper").classList.toggle("active"),document.getElementById("floater-btn").classList.toggle("active"),document.querySelector(".iframe-wrapper.active")&&document.querySelector(".iframe-wrapper.active").classList.remove("active");var e=document.querySelector(".floater-wrapper").classList.contains("active");window.dataLayer.push({event:"clique_floater",interacao:e?"open":"close"})}),setTimeout(()=>a(),1e3)})}();



            var floater=function(){function t(){var e=document.querySelector(".floater-wrapper");e&&(e.innerHTML=`
            <div class="floater-box">
                <div class="pb-h">
                    <b>É fácil se inscrever!</b>
                    <div class="line-height-120">Os canais abaixo são exclusivos para realizar a inscrição, escolha a melhor opção para você:</div>
                </div>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','whatsapp'); window.open(whatsappUrl('floater'), '_blank');" href="javascript:void(0)" alt="WhatsApp" title="WhatsApp" class="floater-action">
                    <i class="fab fa-whatsapp f-size-20"></i>
                    <span>WhatsApp</span>
                </a>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','nosso-chat')" href="JavaScript:void(0);" id="floater-chat-btn" rel="" alt="Nosso Chat" title="Nosso Chat" target="_self" class="floater-action on-click-open-chat">
                    <i class="fas fa-comment"></i>
                    <span>Nosso Chat</span>
                </a>
                <a role="button" onclick="fireGA('anhanguera:chat','click:link','no-0800')" href="tel:08000001686" alt="No 0800-000-1686" title="No 0800-000-1686" target="_self" class="floater-action">
                    <i class="fas fa-phone"></i>
                    <span>No 0800-000-1686</span>
                </a>
                <a role="button" href="javascript:;" onclick="openRegisterModal();fireGA('anhanguera:chat','click:link','aqui-mesmo-no-site')" rel="noopener noreferrer" alt="Aqui mesmo no site" title="Aqui mesmo no site" class="floater-action">
                    <i class="fas fa-pen"></i>
                    <span>Aqui mesmo no site</span>
                </a>
            </div>`,document.getElementById("floater-chat-btn").addEventListener("click",()=>{var e=document.getElementById("blip-chat-open-iframe");e&&!e.classList.contains("opened")&&document.getElementById("dots-cta").click()}))}document.addEventListener("DOMContentLoaded",function(){var e,a;e=document.getElementsByTagName("head")[0],(a=document.createElement("link")).rel="stylesheet",a.type="text/css",a.href="/assets/css/floater.css",a.media="all",e.appendChild(a),document.getElementById("floater-btn").addEventListener("click",()=>{document.getElementById("blip-chat-open-iframe")?.classList?.contains("opened")&&document.getElementById("dots-close-cta").click(),document.querySelector(".floater-wrapper").classList.toggle("active"),document.getElementById("floater-btn").classList.toggle("active"),document.querySelector(".iframe-wrapper.active")&&document.querySelector(".iframe-wrapper.active").classList.remove("active");var e=document.querySelector(".floater-wrapper").classList.contains("active");window.dataLayer.push({event:"clique_floater",interacao:e?"open":"close"})}),setTimeout(()=>t(),1e3)})}();