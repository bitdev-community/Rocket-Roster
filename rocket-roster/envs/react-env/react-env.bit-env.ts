import { ReactEnv } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';
import { tailwindTransformer } from '@learnbit/styling.transformers.tailwind';

export class MyReactEnv extends ReactEnv {
  /* a shorthand name for the env */
  name = 'react-env';

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      transformers: [
        tailwindTransformer({
          cdn: true,
        }),
      ],
    });
  }
}

export default new MyReactEnv();
