import { Card } from "@/components/daisyui";

const HTMLChangelog = () => {
    return (
        <>
            <div className="">
                <Card className="bg-base-100">
                    <div className="p-5">
                        <p className="text-lg font-medium">
                            1.1 <span className="text-sm text-base-content/70">(Latest, Initial Version)</span>
                        </p>
                        <div className="mt-3 inline-block rounded bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-600">
                            <p>Technology Stack</p>
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>HTML 5</li>
                            <li>TailwindCSS 3.4.4</li>
                            <li>daisyUI 4.12.x</li>
                            <li>Vite 5.2.x</li>
                        </ul>
                    </div>
                </Card>
                <Card className="mt-5 bg-base-100">
                    <div className="p-5">
                        <p className="text-lg font-medium">
                            1.0{" "}
                            <span className="text-sm text-base-content/70">
                                (Skipping, Due to making same version as core product)
                            </span>
                        </p>
                    </div>
                </Card>
            </div>
        </>
    );
};

export { HTMLChangelog };
