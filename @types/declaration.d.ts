declare module '*.module.css' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.module.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module 'hex-to-hsl' {
    export default function convert(input?: string): [number, number, number] | undefined;
}
