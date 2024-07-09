import { render } from '@testing-library/react';
import { Github } from '.';

test('render label Github', () => {
  const { container } = render(
    <Github repository="LY1806620741/distribution-download" />,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="githubLabel ant-flex css-dev-only-do-not-override-m4timi"
        title="goto github"
      >
        <div
          class="ant-flex css-dev-only-do-not-override-m4timi"
        >
          <span
            aria-label="branches"
            class="anticon anticon-branches"
            role="img"
            style="font-size: 32px;"
          >
            <svg
              aria-hidden="true"
              data-icon="branches"
              fill="currentColor"
              focusable="false"
              height="1em"
              viewBox="64 64 896 896"
              width="1em"
            >
              <path
                d="M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
              />
            </svg>
          </span>
        </div>
        <div
          class="ant-flex css-dev-only-do-not-override-m4timi ant-flex-align-stretch ant-flex-vertical"
        >
          LY1806620741/distribution-download
          <div
            class="ant-flex css-dev-only-do-not-override-m4timi"
            style="gap: 4px;"
          />
        </div>
      </div>
    </div>
  `);
});

test('render label Github with tag and other', () => {
  const { container } = render(
    <Github
      repository="LY1806620741/distribution-download"
      showTag="0.0.1.pre"
      showStarsNum
      showForksNum
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="githubLabel ant-flex css-dev-only-do-not-override-m4timi"
        title="goto github"
      >
        <div
          class="ant-flex css-dev-only-do-not-override-m4timi"
        >
          <span
            aria-label="branches"
            class="anticon anticon-branches"
            role="img"
            style="font-size: 32px;"
          >
            <svg
              aria-hidden="true"
              data-icon="branches"
              fill="currentColor"
              focusable="false"
              height="1em"
              viewBox="64 64 896 896"
              width="1em"
            >
              <path
                d="M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
              />
            </svg>
          </span>
        </div>
        <div
          class="ant-flex css-dev-only-do-not-override-m4timi ant-flex-align-stretch ant-flex-vertical"
        >
          LY1806620741/distribution-download
          <div
            class="ant-flex css-dev-only-do-not-override-m4timi"
            style="gap: 4px;"
          >
            <span
              aria-label="tag"
              class="anticon anticon-tag"
              role="img"
            >
              <svg
                aria-hidden="true"
                data-icon="tag"
                fill="currentColor"
                focusable="false"
                height="1em"
                viewBox="64 64 896 896"
                width="1em"
              >
                <path
                  d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                />
              </svg>
            </span>
            0.0.1.pre
            <span
              aria-label="star"
              class="anticon anticon-star"
              role="img"
            >
              <svg
                aria-hidden="true"
                data-icon="star"
                fill="currentColor"
                focusable="false"
                height="1em"
                viewBox="64 64 896 896"
                width="1em"
              >
                <path
                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                />
              </svg>
            </span>
            <span
              aria-label="fork"
              class="anticon anticon-fork"
              role="img"
            >
              <svg
                aria-hidden="true"
                data-icon="fork"
                fill="currentColor"
                focusable="false"
                height="1em"
                viewBox="64 64 896 896"
                width="1em"
              >
                <path
                  d="M752 100c-61.8 0-112 50.2-112 112 0 47.7 29.9 88.5 72 104.6v27.6L512 601.4 312 344.2v-27.6c42.1-16.1 72-56.9 72-104.6 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 50.6 33.8 93.5 80 107.3v34.4c0 9.7 3.3 19.3 9.3 27L476 672.3v33.6c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-33.6l226.7-291.6c6-7.7 9.3-17.3 9.3-27v-34.4c46.2-13.8 80-56.7 80-107.3 0-61.8-50.2-112-112-112zM224 212a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm336 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm192-552a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  `);
});

test('render simple Github in small screen', () => {
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));

  const { container } = render(
    <Github
      repository="LY1806620741/distribution-download"
      showTag="0.0.1.pre"
      showStarsNum
      showForksNum
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        style="cursor: pointer; padding: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; vertical-align: middle;"
      >
        <span
          aria-label="github"
          class="anticon anticon-github"
          role="img"
        >
          <svg
            aria-hidden="true"
            data-icon="github"
            fill="currentColor"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
            />
          </svg>
        </span>
      </span>
    </div>
  `);
});
