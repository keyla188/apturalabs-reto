import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Blocks() {
    const scene = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scene.current) return;

        const width = scene.current.clientWidth;
        const height = scene.current.clientHeight;

        const engine = Matter.Engine.create();
        engine.world.gravity.y = 1;

        const render = Matter.Render.create({
            element: scene.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
            },
        });

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        const walls = [
            Matter.Bodies.rectangle(width / 2, -25, width, 50, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(width / 2, height + 25, width, 50, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(-25, height / 2, 50, height, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(width + 25, height / 2, 50, height, {
                isStatic: true,
                render: { visible: false },
            }),
        ];

        const colors = ["#b96eff ", "#ff6ec0", "#91ffb4 ", "#6e90ff", "#6ed8ff"];
        const items = ["No Ideas", "Customer acquisition", "Engaging Contents", "No Strategy", "Poor Analytics"];

        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d")!;
        tempCtx.font = "18px Arial";

        const boxes = items.map((text, i) => {
            const textWidth = tempCtx.measureText(text).width;
            const boxWidth = textWidth + 40;
            const boxHeight = 60;

            const box = Matter.Bodies.rectangle(width / 2 + (Math.random() - 0.5) * 150, 50, boxWidth, boxHeight, {
                restitution: 0.5,
                frictionAir: 0.01,
                render: {
                    fillStyle: colors[i],
                    strokeStyle: "#000",
                    lineWidth: 1,
                    sprite: {
                        texture: generateRoundedRect(boxWidth, boxHeight, colors[i]),
                    },
                },
            });


            (box as any).labelText = text;
            (box as any).boxWidth = boxWidth;
            (box as any).boxHeight = boxHeight;
            return box;
        });

        Matter.World.add(engine.world, [...boxes, ...walls]);

        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
        });
        Matter.World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        Matter.Events.on(render, "afterRender", () => {
            const ctx = render.context;
            ctx.font = "bold 18px Arial";
            ctx.fillStyle = "#FFFF";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            boxes.forEach(box => {
                const pos = box.position;
                const angle = box.angle;

                ctx.save();
                ctx.translate(pos.x, pos.y);
                ctx.rotate(angle);
                ctx.fillText((box as any).labelText, 0, 0);
                ctx.restore();
            });
        });

        Matter.Render.run(render);

        return () => {
            Matter.Render.stop(render);
            Matter.World.clear(engine.world, false);
            Matter.Engine.clear(engine);
            Matter.Runner.stop(runner);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return <div ref={scene} className="w-full h-[400px] relative bg-background border-none"></div>;
}
function generateRoundedRect(width: number, height: number, color: string) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = color;
    const radius = Math.min(width, height) / 2;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(width - radius, 0);
    ctx.quadraticCurveTo(width, 0, width, radius);
    ctx.lineTo(width, height - radius);
    ctx.quadraticCurveTo(width, height, width - radius, height);
    ctx.lineTo(radius, height);
    ctx.quadraticCurveTo(0, height, 0, height - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.fill();
    return canvas.toDataURL();
}
