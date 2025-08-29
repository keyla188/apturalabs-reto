import { motion } from "framer-motion";

export default function Chart() {
    return (
        <div className="bg-white p-6 rounded-2xl w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-medium">Views 24 hours</h2>
                <div className="flex gap-2 justify-center items-center">
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
                        <span>
                            100%
                        </span>
                    </div>
                    <span className="text-gray-500">vs last month</span>
                </div>
            </div>

            {/* Número principal */}
            <p className="text-4xl font-bold text-blue-600 mb-2">100K</p>

            {/* Chart con grid */}
            <div className="relative w-full h-40 overflow-hidden">
                {/* Grid */}
                <svg className="absolute inset-0 w-full h-full">
                    <g className="text-gray-300 text-xs" transform="translate(40, 0)">
                        <line x1="0" x2="100%" y1="100%" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
                        <line x1="0" x2="100%" y1="50%" y2="50%" stroke="currentColor" strokeDasharray="4 4" />
                        <line x1="0" x2="100%" y1="0" y2="0" stroke="currentColor" strokeDasharray="4 4" />
                    </g>
                </svg>

                {/* Labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-300 text-sm font-bold pr-2">
                    <span>100k</span>
                    <span>50k</span>
                    <span>0</span>
                </div>

                {/* Línea azul animada */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M50 100 L166 70 L333 80 L500 50 L666 50 L833 0 L1000"
                        stroke="#2563eb"
                        strokeWidth="5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </div>
        </div>
    );
}
