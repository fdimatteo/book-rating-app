/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GIT_SHA: string;
    REACT_APP_BUILD_DATE: string;
    REACT_APP_GIT_TAG: string;
  }
}
