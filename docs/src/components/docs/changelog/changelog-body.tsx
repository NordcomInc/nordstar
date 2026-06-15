import type { ChangelogBlock, InlineToken } from '@/lib/changelog/parse';

function Inline({ tokens }: { tokens: InlineToken[] }) {
    return (
        <>
            {tokens.map((token, index) => {
                if (token.type === 'code') {
                    return (
                        <code
                            className="rounded bg-background-highlight/40 px-1 py-0.5 font-mono text-[0.9em]"
                            key={index}
                        >
                            {token.value}
                        </code>
                    );
                }
                if (token.type === 'strong') {
                    return (
                        <strong className="font-semibold text-foreground" key={index}>
                            {token.value}
                        </strong>
                    );
                }
                if (token.type === 'link') {
                    return (
                        <a
                            className="text-primary underline underline-offset-4 hover:no-underline"
                            href={token.href}
                            key={index}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            {token.label}
                        </a>
                    );
                }
                return <span key={index}>{token.value}</span>;
            })}
        </>
    );
}

/** Renders the parsed block/inline AST of a changelog entry with design-system styling. */
export function ChangelogBody({ blocks }: { blocks: ChangelogBlock[] }) {
    return (
        <div className="flex flex-col gap-2 text-base leading-relaxed">
            {blocks.map((block, index) => {
                if (block.type === 'list') {
                    return (
                        <ul className="flex list-disc flex-col gap-1 pl-5 text-foreground-highlight" key={index}>
                            {block.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <Inline tokens={item} />
                                </li>
                            ))}
                        </ul>
                    );
                }
                return (
                    <p className="text-foreground-highlight" key={index}>
                        <Inline tokens={block.tokens} />
                    </p>
                );
            })}
        </div>
    );
}
