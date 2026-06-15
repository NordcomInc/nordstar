declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}

declare module 'hex-to-hsl' {
    export default function convert(input?: string): [number, number, number] | undefined;
}
