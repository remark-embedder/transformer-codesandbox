import remarkEmbedder from '@remark-embedder/core'
import remark from 'remark'
import html from 'remark-html'

import CodeSandboxTransformer from '../'

// this removes the quotes around strings...
const unquoteSerializer = {
  serialize: (val: string) => val.trim(),
  test: (val: unknown) => typeof val === 'string',
}
expect.addSnapshotSerializer(unquoteSerializer)

test('smoke test', async () => {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodeSandboxTransformer],
    })
    .use(html)
    .process(
      `
This is a CodeSandbox:

https://codesandbox.io/s/css-variables-vs-themeprovider-df90h
`.trim(),
    )

  expect(result.toString()).toMatchInlineSnapshot(`
    <p>This is a CodeSandbox:</p>
    <iframe src="https://codesandbox.io/embed/css-variables-vs-themeprovider-df90h" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  `)
})
