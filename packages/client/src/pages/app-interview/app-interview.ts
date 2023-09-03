import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { styles } from './app-interview.style';

import { styles as sharedStyles } from '../../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

import { StoreController } from '@nanostores/lit';
import { $resume } from '../../stores/store-resume';
import { $interviewQuestions } from '../../stores/store-interview';

@customElement('app-interview')
export class AppInterview extends LitElement {
  static styles = [sharedStyles, styles];

  private resumeController = new StoreController(this, $resume);

  private interviewController = new StoreController(this, $interviewQuestions);

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header
        ?enableBack="${true}"
        .backPath=${'about'}
        .title=${'예상 면접 질문'}
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
            style=${styleMap({
              display:
                this.resumeController.value.careers.length > 0
                  ? 'block'
                  : 'none',
            })}
          >
            <div slot="header">
              경력

              <sl-switch checked disabled>경력 없음(신입)</sl-switch>
            </div>

            <div class="career-wrap">
              ${this.resumeController.value.careers.map((career, index) => {
                return html`
                  <sl-textarea
                    name="career"
                    resize="auto"
                    disabled
                    .value=${career.text}
                    filled
                  >
                    <div slot="label">
                      <span>경력 ${index + 1}</span>
                    </div>
                  </sl-textarea>
                `;
              })}
            </div>
          </sl-card>

          <sl-card class="resume-card">
            <div slot="header">
              프로젝트
              <sl-switch ?checked=${true} disabled
                >프로젝트 경험 없음</sl-switch
              >
            </div>

            <div class="project-wrap">
              ${this.resumeController.value.projects.map((project, index) => {
                return html`
                  <sl-textarea
                    name="project"
                    resize="auto"
                    disabled
                    .value=${project.text}
                    filled
                  >
                    <div slot="label">
                      <span>프로젝트 ${index + 1}</span>
                    </div>
                  </sl-textarea>
                `;
              })}
            </div>
          </sl-card>

          <sl-card class="resume-card">
            <div slot="header">기술스택 *</div>

            <div class="techstack-wrap">
              ${this.resumeController.value.techstacks
                .split(`,`)
                .map((techstack, index) => {
                  return html`
                    <sl-input name="techstack" .value=${techstack} disabled>
                      <div slot="label">
                        <span>기술스택 ${index + 1}</span>
                      </div>
                    </sl-input>
                  `;
                })}
            </div>
          </sl-card>
        </section>

        <sl-divider vertical></sl-divider>

        <section class="interview-section">
          <h2>면접 질문</h2>

          <sl-card class="interview-card">
            <div slot="header">
              <span>자기소개 질문</span>
              ${this.interviewController.value.introduce.loading
                ? html`<sl-spinner></sl-spinner>`
                : html``}
            </div>
            ${this.interviewController.value.introduce.loading
              ? html`
                  <div class="skeleton-paragraphs">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                  </div>
                `
              : html`
                  <sl-textarea
                    name="introduce"
                    resize="auto"
                    .value=${this.interviewController.value.introduce.data
                      ?.text || ''}
                    readonly
                  >
                  </sl-textarea>
                `}
          </sl-card>
          ${this.interviewController.value.careers?.map((career, index) => {
            if (!career.data?.text && !career.loading) {
              return html``;
            }
            return html`
              <sl-card class="interview-card">
                <div slot="header">
                  <span>경력 ${index + 1} 질문</span>
                  ${career.loading ? html`<sl-spinner></sl-spinner>` : html``}
                </div>

                ${career.loading
                  ? html`
                      <div class="skeleton-paragraphs">
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                      </div>
                    `
                  : html`
                      <sl-textarea
                        name="career"
                        resize="auto"
                        .value=${career.data?.text || ''}
                        readonly
                      >
                      </sl-textarea>
                    `}
              </sl-card>
            `;
          })}
          ${this.interviewController.value.projects?.map((project, index) => {
            if (!project.data?.text && !project.loading) {
              return html``;
            }
            return html`
              <sl-card class="interview-card">
                <div slot="header">
                  <span>프로젝트 ${index + 1} 질문</span>
                  ${project.loading ? html`<sl-spinner></sl-spinner>` : html``}
                </div>

                ${project.loading
                  ? html`
                      <div class="skeleton-paragraphs">
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                        <sl-skeleton effect="pulse"></sl-skeleton>
                      </div>
                    `
                  : html`
                      <sl-textarea
                        name="project"
                        resize="auto"
                        .value=${project.data?.text || ''}
                        readonly
                      >
                      </sl-textarea>
                    `}
              </sl-card>
            `;
          })}
          <sl-card class="interview-card">
            <div slot="header">
              <span>기술스택 질문</span>
              ${this.interviewController.value.techStacks.loading
                ? html`<sl-spinner></sl-spinner>`
                : html``}
            </div>
            ${this.interviewController.value.techStacks.loading
              ? html`
                  <div class="skeleton-paragraphs">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                  </div>
                `
              : html`
                  <sl-textarea
                    name="techStacks"
                    resize="auto"
                    .value=${this.interviewController.value.techStacks.data
                      ?.text || ''}
                    readonly
                  >
                  </sl-textarea>
                `}
          </sl-card>
        </section>
      </main>
    `;
  }
}

