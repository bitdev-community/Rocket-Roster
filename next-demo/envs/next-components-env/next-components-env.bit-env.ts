import { ReactEnv } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';
import { tailwindTransformer } from '@learnbit/styling.transformers.tailwind';

export class NextComponentsEnv extends ReactEnv {
  /* a shorthand name for the env */
  name = 'next-components-env';

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

export default new NextComponentsEnv();
