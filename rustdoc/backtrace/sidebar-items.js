initSidebarItems({"enum":[["BytesOrWideString","A platform independent representation of a string. When working with `std` enabled it is recommended to the convenience methods for providing conversions to `std` types."],["PrintFmt","The styles of printing that we can print"]],"fn":[["clear_symbol_cache","Attempt to reclaim that cached memory used to symbolicate addresses."],["resolve","Resolve an address to a symbol, passing the symbol to the specified closure."],["resolve_frame","Resolve a previously capture frame to a symbol, passing the symbol to the specified closure."],["resolve_frame_unsynchronized","Same as `resolve_frame`, only unsafe as it’s unsynchronized."],["resolve_unsynchronized","Same as `resolve`, only unsafe as it’s unsynchronized."],["trace","Inspects the current call-stack, passing all active frames into the closure provided to calculate a stack trace."],["trace_unsynchronized","Same as `trace`, only unsafe as it’s unsynchronized."]],"struct":[["Backtrace","Representation of an owned and self-contained backtrace."],["BacktraceFmt","A formatter for backtraces."],["BacktraceFrame","Captured version of a frame in a backtrace."],["BacktraceFrameFmt","A formatter for just one frame of a backtrace."],["BacktraceSymbol","Captured version of a symbol in a backtrace."],["Frame","A trait representing one frame of a backtrace, yielded to the `trace` function of this crate."],["Symbol","A trait representing the resolution of a symbol in a file."],["SymbolName","A wrapper around a symbol name to provide ergonomic accessors to the demangled name, the raw bytes, the raw string, etc."]]});