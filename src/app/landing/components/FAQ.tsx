import messagesSquareIcon from "@iconify/icons-lucide/messages-square";

import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Accordion, AccordionContent, AccordionTitle } from "@/components/daisyui";
import { routes } from "@/lib/routes";

const FAQ = () => {
    return (
        <div>
            <div className="container py-12 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-7 lg:gap-24">
                    <div className="col-span-3">
                        <div className="inline-block rounded border border-purple-500/5 bg-purple-500/5 p-2.5">
                            <Icon icon={messagesSquareIcon} fontSize={20} className="text-purple-600" />
                        </div>
                        <p className="mt-3 text-3xl font-semibold">Any Question in Mind?</p>
                        <p className="mt-3 text-base-content/70">
                            If you have still question, don&apos;t worry. Just contact us with your queries.
                        </p>
                        <Link className="btn btn-sm mt-4" href={routes.externalLinks.discord}>
                            Contact Us
                        </Link>
                    </div>
                    <div className="col-span-4">
                        <div className="space-y-4">
                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    How can i give a feedback?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        You can provide feedback by filling out our{" "}
                                        <Link
                                            className="text-primary"
                                            href={"https://forms.gle/UeX3jgsjFNFcZsq9A"}
                                            target="_blank">
                                            Google Form
                                        </Link>
                                    </p>
                                </AccordionContent>
                            </Accordion>
                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    Can i get full source code?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        Certainly, we offer the complete source code depending on the package
                                        you&apos;ve purchased. You might look into depth:{" "}
                                        <Link className="text-primary" href={"/docs/knowledge/package"} target="_blank">
                                            Packages
                                        </Link>
                                    </p>
                                </AccordionContent>
                            </Accordion>

                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    Will there be any future payments required?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        Absolutely not. It&apos;s a one-time purchase, with no hidden charges or future
                                        payments to worry about.
                                    </p>
                                </AccordionContent>
                            </Accordion>

                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    Are there plans for future updates, and will they incur any costs?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        All future updates are completely free. No payment is required for any upcoming
                                        updates. Yes, there are many plans for future updates. You can checkout{" "}
                                        <Link className="text-primary" href={"/docs/support/roadmap"} target="_blank">
                                            future roadmap
                                        </Link>
                                    </p>
                                </AccordionContent>
                            </Accordion>

                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    Do I need a backend for this?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        No backend is required to run this UI template. However, you can integrate any
                                        type of backend as needed.
                                    </p>
                                </AccordionContent>
                            </Accordion>
                            <Accordion className="border border-base-content/10" icon="arrow">
                                <AccordionTitle className="text-xl font-medium">
                                    Is there any updates in the future?
                                </AccordionTitle>
                                <AccordionContent>
                                    <p className="text-base">
                                        Yes, Our team constantly improves the admin template based on user feedback and
                                        industry trends. You can see product{" "}
                                        <Link className="text-primary" href={"/docs/support/roadmap"} target="_blank">
                                            Roadmap
                                        </Link>
                                    </p>
                                </AccordionContent>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
