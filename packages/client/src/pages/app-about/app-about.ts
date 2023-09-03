import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './app-about.style';

import { styles as sharedStyles } from '../../styles/shared-styles';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';

import { StoreController } from '@nanostores/lit';
import { $introduce, updateIntroduce } from '../../stores/store-introduce';
import {
  $careers,
  addCareer,
  deleteCareer,
  updateCareer,
} from '../../stores/store-career';
import {
  $projects,
  addProject,
  deleteProject,
  updateProject,
} from '../../stores/store-project';
import {
  $techkstacks,
  addTechStack,
  deleteTechStack,
  updateTechStack,
} from '../../stores/store-techstack';
import { router } from '../../router';
import {
  createCareerInterviewQuestion,
  createIntroInterviewQuestion,
  createProjectInterviewQuestion,
  createTechStackInterviewQuestion,
} from '../../stores/store-interview';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [sharedStyles, styles];

  @property({ type: Boolean }) hasCareer = false;

  @property({ type: Boolean }) hasProject = false;

  private introduceController = new StoreController(this, $introduce);

  private careerController = new StoreController(this, $careers);

  private projectController = new StoreController(this, $projects);

  private techstackController = new StoreController(this, $techkstacks);

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}" .title=${'이력서 작성'}>
        <sl-button
          slot="right"
          class="right-btn"
          type="submit"
          variant="primary"
          @click=${async () => {
            router.navigate('interview');
            createIntroInterviewQuestion();
            for (let i = 0; i < this.careerController.value.length; i++) {
              createCareerInterviewQuestion(i);
            }
            for (let j = 0; j < this.projectController.value.length; j++) {
              createProjectInterviewQuestion(j);
            }
            createTechStackInterviewQuestion();
          }}
          >제출하기</sl-button
        >
      </app-header>

      <main class="page page-about">
        <sl-card class="resume-card">
          <div slot="header">
            자기소개 *
            <sl-tooltip
              content="이력서에 대한 내용이 상세할 수록 예상 면접의 질문이 더욱 정확해집니다."
            >
              <sl-icon-button
                name="question-circle"
                label="Settings"
              ></sl-icon-button>
            </sl-tooltip>
          </div>

          <div class="introduce-wrap">
            <sl-textarea
              name="introduce"
              resize="auto"
              .value=${this.introduceController.value}
              @sl-change=${(e: CustomEvent) => {
                updateIntroduce((e.target as HTMLInputElement).value);
              }}
            >
            </sl-textarea>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">
            경력

            <sl-switch
              ?checked=${this.hasCareer}
              @sl-change=${() => (this.hasCareer = !this.hasCareer)}
              >경력 없음(신입)</sl-switch
            >
          </div>

          <div class="career-wrap">
            ${this.careerController.value.map((career, index) => {
              return html`
                <sl-textarea
                  name="career"
                  resize="auto"
                  ?disabled=${this.hasCareer}
                  .value=${career.text}
                  @sl-change=${(e: CustomEvent) => {
                    updateCareer({
                      index,
                      item: { text: (e.target as HTMLInputElement).value },
                    });
                  }}
                >
                  <div slot="label">
                    <span>경력 ${index + 1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      ?disabled=${this.hasCareer}
                      @click=${() => deleteCareer({ index })}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-textarea>
              `;
            })}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                ?disabled=${this.hasCareer}
                @click=${() => addCareer({ text: '' })}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                경력 추가</sl-button
              >
            </div>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">
            프로젝트
            <sl-switch
              ?checked=${this.hasProject}
              @sl-change=${() => (this.hasProject = !this.hasProject)}
              >프로젝트 경험 없음</sl-switch
            >
          </div>

          <div class="project-wrap">
            ${this.projectController.value.map((project, index) => {
              return html`
                <sl-textarea
                  name="project"
                  resize="auto"
                  ?disabled=${this.hasProject}
                  .value=${project.text}
                  @sl-change=${(e: CustomEvent) => {
                    updateProject({
                      index,
                      item: { text: (e.target as HTMLInputElement).value },
                    });
                  }}
                >
                  <div slot="label">
                    <span>프로젝트 ${index + 1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      ?disabled=${this.hasProject}
                      @click=${() => deleteProject({ index })}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-textarea>
              `;
            })}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                ?disabled=${this.hasProject}
                @click=${() => addProject({ text: '' })}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                프로젝트 추가</sl-button
              >
            </div>
          </div>
        </sl-card>

        <sl-card class="resume-card">
          <div slot="header">기술스택 *</div>

          <div class="techstack-wrap">
            ${this.techstackController.value.map((techstack, index) => {
              return html`
                <sl-input
                  name="techstack"
                  .value=${techstack.text}
                  @sl-change=${(e: CustomEvent) =>
                    updateTechStack({
                      index,
                      item: { text: (e.target as HTMLInputElement).value },
                    })}
                  @keypress=${(e: KeyboardEvent) => {
                    const isPressEnter = e.key === 'Enter';
                    const isLastIndex =
                      index === this.techstackController.value.length - 1;
                    const isValue = (e.target as HTMLInputElement).value;
                    if (isPressEnter && isValue) {
                      if (isLastIndex) {
                        addTechStack({ text: '' });
                        this.updateComplete.then(() => {
                          const lastInput = this.shadowRoot?.querySelector(
                            '[name="techstack"]:last-of-type'
                          ) as HTMLInputElement;
                          lastInput.focus();
                        });
                      }
                    }
                  }}
                >
                  <div slot="label">
                    <span>기술스택 ${index + 1}</span>

                    <sl-button
                      class="delete-btn"
                      variant="text"
                      @click=${() => deleteTechStack({ index })}
                    >
                      <sl-icon name="trash" label="삭제"></sl-icon> 삭제
                    </sl-button>
                  </div>
                </sl-input>
              `;
            })}

            <div class="add-btn-wrap">
              <sl-button
                class="add-btn"
                type="button"
                variant="default"
                @click=${() => addTechStack({ text: '' })}
              >
                <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                기술스택 추가</sl-button
              >
            </div>
          </div>
        </sl-card>
      </main>
    `;
  }
}

