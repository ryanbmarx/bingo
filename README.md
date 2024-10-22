# Halloween bingo

A small, SvelteKit + Svelte 5 application, made for a 5th-grade party using technology this developer ought to have some experience with. It comes preloaded with a series of SVG images, and randomly displays them one at a time until someone yells "BINGO!"

## How does it work

Clicking on the little tombstone in the bottom corner will reveal two buttons. One will display a new image. The other will reset the application to its base state. You also can use keyboard commands. `Space` will advance and `r` will reset.

## Under the hood

Each image is an svg inside a svelte component. They are collected in an array of type `IconImage[]`.

```
type IconImage = {
    id: string;
    component: Component;
};
```

On initialization, two arrays are created:

- `usedImages` is an empty array.
- `imagesToUse` is a clone of the images array.

To display an image, a random integer is generated between `0` and `imagesToUse.length - 1`. The `IconImage` at that index is removed from `imagesToUse` and inserted at index `0` of `usedImages`. The images are displayed using a keyed `{#each}` with some transitions for visual fun.