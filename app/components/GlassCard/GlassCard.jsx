const { LuCircleDashed } = require("react-icons/lu");

export const GlassCard = ({ title, children, onViewClick }) => (
    <div className="relative group overflow-hidden bg-white bg-opacity-90 backdrop-blur-lg transition-all duration-300 w-full h-64 border-gray-200">
        <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="p-6 h-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
            {children}
            <button
                onClick={onViewClick}
                className="absolute hover:animate-spin bg-gray-100 p-2 rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-200"
            >
                <LuCircleDashed size={24} />
            </button>
        </div>
    </div>
);