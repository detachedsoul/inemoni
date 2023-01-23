const StatusIndicator = () => {
    return (
		<div>
			<p className="px-8 py-4 bg-brand-purple text-white">
				All Systems Operational
			</p>

			<div className="flex items-center justify-between gap-4 px-8 py-4 border-x border-b border-black min-w-full overflow-x-auto no-scrollbar">
				<p className="shrink-0">Real-time payment server</p>

				<p className="text-[#39c539] shrink-0">Operational</p>
			</div>

			<div className="flex items-center justify-between gap-4 px-8 py-4 border-x border-b border-black min-w-full overflow-x-auto no-scrollbar">
				<p className="shrink-0">Real-time payment server</p>

				<p className="text-[#ff0000] shrink-0">Slightly Down</p>
			</div>

			<div className="flex items-center justify-between gap-4 px-8 py-4 border-x border-b border-black min-w-full overflow-x-auto no-scrollbar">
				<p className="shrink-0">Real-time payment server</p>

				<p className="text-[#39c539] shrink-0">Operational</p>
			</div>

			<div className="flex items-center justify-between gap-4 px-8 py-4 border-x border-b border-black min-w-full overflow-x-auto no-scrollbar">
				<p className="shrink-0">Real-time payment server</p>

				<p className="text-[#39c539] shrink-0">Operational</p>
			</div>
		</div>
	);
};

export default StatusIndicator;
