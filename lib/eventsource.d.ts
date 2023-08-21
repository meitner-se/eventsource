declare type MeitnerEventSourceOptions = {
  withCredentials?: boolean;
  headers?: Record<string, unknown>;
  method?: string;
};

declare type MeitnerEventSourceMessage = {
  data: string;
};

declare class MeitnerEventSource {
  constructor(url: string, options?: MeitnerEventSourceOptions);

  close(): void;

  onmessage: (message: MeitnerEventSourceMessage) => void;
}

declare module "@meitner/eventsource" {
  export default MeitnerEventSource;
}
