import{g as w,h as g,t as b,T as x,i as c,c as v,_ as p,n as m,w as y,S as f,x as s,o as $,j as C,s as _,e as S,f as z}from"./index-a56939b5.js";import{l as h,r as j,s as P}from"./store-interview-f0d75238.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k="important",T=" !"+k,A=w(class extends g{constructor(e){var t;if(super(e),e.type!==b.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const l=e[a];return l==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${l};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ht===void 0){this.ht=new Set;for(const l in t)this.ht.add(l);return this.render(t)}this.ht.forEach(l=>{t[l]==null&&(this.ht.delete(l),l.includes("-")?a.removeProperty(l):a[l]="")});for(const l in t){const r=t[l];if(r!=null){this.ht.add(l);const i=typeof r=="string"&&r.endsWith(T);l.includes("-")||i?a.setProperty(l,i?r.slice(0,-11):r,i?k:""):a[l]=r}}return x}}),O=c`
  main {
    flex-direction: row;
    justify-content: center;
  }

  .resume-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .interview-section {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .interview-card {
    width: 600px;
    max-width: 90vw;
  }

  .interview-card::part(base) {
    height: 100%;
  }

  .introduce-wrap,
  .career-wrap,
  .project-wrap,
  .techstack-wrap {
    width: 100%;
    max-width: 90vw;
  }

  .submit-wrap {
    display: flex;
    justify-content: flex-end;
    width: calc(600px + 2.5rem);
  }

  .resume-card [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .resume-card h3 {
    margin: 0;
  }

  .resume-card sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }

  .add-btn-wrap {
    display: flex;
    justify-content: flex-end;
  }

  sl-textarea:not(:last-child),
  sl-input:not(:last-child),
  sl-select:not(:last-child),
  .add-btn {
    margin-bottom: 1rem;
  }

  .resume-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  sl-textarea::part(form-control-label),
  sl-input::part(form-control-label) {
    width: 100%;
  }

  sl-textarea [slot='label'],
  sl-input [slot='label'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  sl-card [slot='header'] {
    display: flex;
    align-items: center;
  }

  sl-card [slot='header'] sl-spinner {
    margin-left: 0.25rem;
  }

  section > h2 {
    text-align: center;
  }

  sl-card {
    width: 600px;
    max-width: 90vw;
  }

  .skeleton-paragraphs sl-skeleton {
    margin-bottom: 0.7rem;
  }

  .skeleton-paragraphs sl-skeleton:nth-child(2) {
    width: 95%;
  }

  .skeleton-paragraphs sl-skeleton:nth-child(4) {
    width: 90%;
  }

  .skeleton-paragraphs sl-skeleton:last-child {
    width: 50%;
  }

  .interview-section sl-card:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    sl-card {
      max-width: 70vw;
    }
  }

  @media (max-width: 1280px) {
    .page {
      flex-direction: column-reverse;
      overflow-x: hidden;
    }

    sl-divider {
      display: none;
    }

    .resume-section {
      margin-bottom: 1rem;
    }
  }
`;var E=c`
  ${v}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,n=class extends f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};n.styles=E;p([m({type:Boolean,reflect:!0})],n.prototype,"vertical",2);p([y("vertical")],n.prototype,"handleVerticalChange",1);n.define("sl-divider");var B=c`
  ${v}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,u=class extends f{constructor(){super(...arguments),this.effect="none"}render(){return s`
      <div
        part="base"
        class=${$({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};u.styles=B;p([m()],u.prototype,"effect",2);u.define("sl-skeleton");C.define("sl-spinner");var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,V=(e,t,a,l)=>{for(var r=l>1?void 0:l?I(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(r=(l?o(t,a,r):o(r))||r);return l&&r&&D(t,a,r),r};let d=class extends _{constructor(){super(),this.resumeController=new h.StoreController(this,j),this.interviewController=new h.StoreController(this,P)}render(){return s`
      <app-header
        ?enableBack="${!0}"
        .backPath=${"about"}
        .title=${"예상 면접 질문"}
      >
      </app-header>

      <main class="page page-interview">
        <section class="resume-section">
          <h2>이력서</h2>
          <sl-card class="resume-card">
            <div slot="header">자기소개 *</div>

            <div class="introduce-wrap">
              <sl-textarea
                name="introduce"
                resize="auto"
                .value=${this.resumeController.value.introduce}
                filled
                disabled
              >
              </sl-textarea>
            </div>
          </sl-card>

          <sl-card
            class="resume-card"
            style=${A({display:this.resumeController.value.careers.length>0?"block":"none"})}
          >
            <div slot="header">
              경력

              <sl-switch checked disabled>경력 없음(신입)</sl-switch>
            </div>

            <div class="career-wrap">
              ${this.resumeController.value.careers.map((e,t)=>s`
                  <sl-textarea
                    name="career"
                    resize="auto"
                    disabled
                    .value=${e.text}
                    filled
                  >
                    <div slot="label">
                      <span>경력 ${t+1}</span>
                    </div>
                  </sl-textarea>
                `)}
            </div>
          </sl-card>

          <sl-card class="resume-card">
            <div slot="header">
              프로젝트
              <sl-switch ?checked=${!0} disabled
                >프로젝트 경험 없음</sl-switch
              >
            </div>

            <div class="project-wrap">
              ${this.resumeController.value.projects.map((e,t)=>s`
                  <sl-textarea
                    name="project"
                    resize="auto"
                    disabled
                    .value=${e.text}
                    filled
                  >
                    <div slot="label">
                      <span>프로젝트 ${t+1}</span>
                    </div>
                  </sl-textarea>
                `)}
            </div>
          </sl-card>

          <sl-card class="resume-card">
            <div slot="header">기술스택 *</div>

            <div class="techstack-wrap">
              ${this.resumeController.value.techstacks.split(",").map((e,t)=>s`
                    <sl-input name="techstack" .value=${e} disabled>
                      <div slot="label">
                        <span>기술스택 ${t+1}</span>
                      </div>
                    </sl-input>
                  `)}
            </div>
          </sl-card>
        </section>

        <sl-divider vertical></sl-divider>

        <section class="interview-section">
          <h2>면접 질문</h2>

          <sl-card class="interview-card">
            <div slot="header">
              <span>자기소개 질문</span>
              ${this.interviewController.value.introduce.loading?s`<sl-spinner></sl-spinner>`:s``}
            </div>
            ${this.interviewController.value.introduce.loading?s`
                  <div class="skeleton-paragraphs">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                  </div>
                `:s`
                  <sl-textarea
                    name="introduce"
                    resize="auto"
                    .value=${this.interviewController.value.introduce.data?.text||""}
                    readonly
                  >
                  </sl-textarea>
                `}
          </sl-card>
          ${this.interviewController.value.careers?.map((e,t)=>!e.data?.text&&!e.loading?s``:s`
              <sl-card class="interview-card">
                <div slot="header">
                  <span>경력 ${t+1} 질문</span>
                  ${e.loading?s`<sl-spinner></sl-spinner>`:s``}
                </div>

                ${e.loading?s`
                      <div class="skeleton-paragraphs">
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                      </div>
                    `:s`
                      <sl-textarea
                        name="career"
                        resize="auto"
                        .value=${e.data?.text||""}
                        readonly
                      >
                      </sl-textarea>
                    `}
              </sl-card>
            `)}
          ${this.interviewController.value.projects?.map((e,t)=>!e.data?.text&&!e.loading?s``:s`
              <sl-card class="interview-card">
                <div slot="header">
                  <span>프로젝트 ${t+1} 질문</span>
                  ${e.loading?s`<sl-spinner></sl-spinner>`:s``}
                </div>

                ${e.loading?s`
                      <div class="skeleton-paragraphs">
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                      </div>
                    `:s`
                      <sl-textarea
                        name="project"
                        resize="auto"
                        .value=${e.data?.text||""}
                        readonly
                      >
                      </sl-textarea>
                    `}
              </sl-card>
            `)}
          <sl-card class="interview-card">
            <div slot="header">
              <span>기술스택 질문</span>
              ${this.interviewController.value.techStacks.loading?s`<sl-spinner></sl-spinner>`:s``}
            </div>
            ${this.interviewController.value.techStacks.loading?s`
                  <div class="skeleton-paragraphs">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                  </div>
                `:s`
                  <sl-textarea
                    name="techStacks"
                    resize="auto"
                    .value=${this.interviewController.value.techStacks.data?.text||""}
                    readonly
                  >
                  </sl-textarea>
                `}
          </sl-card>
        </section>
      </main>
    `}};d.styles=[S,O];d=V([z("app-interview")],d);export{d as AppInterview};
//# sourceMappingURL=app-interview-8fdc47c5.js.map
