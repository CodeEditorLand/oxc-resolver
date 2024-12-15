/* auto-generated by NAPI-RS */
/* eslint-disable */
export declare class ResolverFactory {
	constructor(options?: NapiResolveOptions | undefined | null);
	static default(): ResolverFactory;
	/** Clone the resolver using the same underlying cache. */
	cloneWithOptions(options: NapiResolveOptions): ResolverFactory;
	/** Clear the underlying cache. */
	clearCache(): void;
	/** Synchronously resolve `specifier` at an absolute path to a `directory`. */
	sync(directory: string, request: string): ResolveResult;
	/** Asynchronously resolve `specifier` at an absolute path to a `directory`. */
	async(directory: string, request: string): Promise<ResolveResult>;
}

export declare const enum EnforceExtension {
	Auto = 0,
	Enabled = 1,
	Disabled = 2,
}

/**
 * Module Resolution Options
 *
 * Options are directly ported from [enhanced-resolve](https://github.com/webpack/enhanced-resolve#resolver-options).
 *
 * See [webpack resolve](https://webpack.js.org/configuration/resolve/) for information and examples
 */
export interface NapiResolveOptions {
	/**
	 * Path to TypeScript configuration file.
	 *
	 * Default `None`
	 */
	tsconfig?: TsconfigOptions;
	/**
	 * Alias for [ResolveOptions::alias] and [ResolveOptions::fallback].
	 *
	 * For the second value of the tuple, `None -> AliasValue::Ignore`, Some(String) ->
	 * AliasValue::Path(String)`
	 * Create aliases to import or require certain modules more easily.
	 * A trailing $ can also be added to the given object's keys to signify an exact match.
	 */
	alias?: Record<string, Array<string | undefined | null>>;
	/**
	 * A list of alias fields in description files.
	 * Specify a field, such as `browser`, to be parsed according to [this specification](https://github.com/defunctzombie/package-browser-field-spec).
	 * Can be a path to json object such as `["path", "to", "exports"]`.
	 *
	 * Default `[]`
	 */
	aliasFields?: (string | string[])[];
	/**
	 * Condition names for exports field which defines entry points of a package.
	 * The key order in the exports field is significant. During condition matching, earlier entries have higher priority and take precedence over later entries.
	 *
	 * Default `[]`
	 */
	conditionNames?: Array<string>;
	/**
	 * The JSON files to use for descriptions. (There was once a `bower.json`.)
	 *
	 * Default `["package.json"]`
	 */
	descriptionFiles?: Array<string>;
	/**
	 * If true, it will not allow extension-less files.
	 * So by default `require('./foo')` works if `./foo` has a `.js` extension,
	 * but with this enabled only `require('./foo.js')` will work.
	 *
	 * Default to `true` when [ResolveOptions::extensions] contains an empty string.
	 * Use `Some(false)` to disable the behavior.
	 * See <https://github.com/webpack/enhanced-resolve/pull/285>
	 *
	 * Default None, which is the same as `Some(false)` when the above empty rule is not applied.
	 */
	enforceExtension?: EnforceExtension;
	/**
	 * A list of exports fields in description files.
	 * Can be a path to json object such as `["path", "to", "exports"]`.
	 *
	 * Default `[["exports"]]`.
	 */
	exportsFields?: (string | string[])[];
	/**
	 * Fields from `package.json` which are used to provide the internal requests of a package
	 * (requests starting with # are considered internal).
	 *
	 * Can be a path to a JSON object such as `["path", "to", "imports"]`.
	 *
	 * Default `[["imports"]]`.
	 */
	importsFields?: (string | string[])[];
	/**
	 * An object which maps extension to extension aliases.
	 *
	 * Default `{}`
	 */
	extensionAlias?: Record<string, Array<string>>;
	/**
	 * Attempt to resolve these extensions in order.
	 * If multiple files share the same name but have different extensions,
	 * will resolve the one with the extension listed first in the array and skip the rest.
	 *
	 * Default `[".js", ".json", ".node"]`
	 */
	extensions?: Array<string>;
	/**
	 * Redirect module requests when normal resolving fails.
	 *
	 * Default `[]`
	 */
	fallback?: Record<string, Array<string | undefined | null>>;
	/**
	 * Request passed to resolve is already fully specified and extensions or main files are not resolved for it (they are still resolved for internal requests).
	 *
	 * See also webpack configuration [resolve.fullySpecified](https://webpack.js.org/configuration/module/#resolvefullyspecified)
	 *
	 * Default `false`
	 */
	fullySpecified?: boolean;
	/**
	 * A list of main fields in description files
	 *
	 * Default `["main"]`.
	 */
	mainFields?: string | string[];
	/**
	 * The filename to be used while resolving directories.
	 *
	 * Default `["index"]`
	 */
	mainFiles?: Array<string>;
	/**
	 * A list of directories to resolve modules from, can be absolute path or folder name.
	 *
	 * Default `["node_modules"]`
	 */
	modules?: string | string[];
	/**
	 * Resolve to a context instead of a file.
	 *
	 * Default `false`
	 */
	resolveToContext?: boolean;
	/**
	 * Prefer to resolve module requests as relative requests instead of using modules from node_modules directories.
	 *
	 * Default `false`
	 */
	preferRelative?: boolean;
	/**
	 * Prefer to resolve server-relative urls as absolute paths before falling back to resolve in ResolveOptions::roots.
	 *
	 * Default `false`
	 */
	preferAbsolute?: boolean;
	/**
	 * A list of resolve restrictions to restrict the paths that a request can be resolved on.
	 *
	 * Default `[]`
	 */
	restrictions?: Array<Restriction>;
	/**
	 * A list of directories where requests of server-relative URLs (starting with '/') are resolved.
	 * On non-Windows systems these requests are resolved as an absolute path first.
	 *
	 * Default `[]`
	 */
	roots?: Array<string>;
	/**
	 * Whether to resolve symlinks to their symlinked location.
	 * When enabled, symlinked resources are resolved to their real path, not their symlinked location.
	 * Note that this may cause module resolution to fail when using tools that symlink packages (like npm link).
	 *
	 * Default `true`
	 */
	symlinks?: boolean;
	/**
	 * Whether to parse [module.builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules) or not.
	 * For example, "zlib" will throw [crate::ResolveError::Builtin] when set to true.
	 *
	 * Default `false`
	 */
	builtinModules?: boolean;
}

export interface ResolveResult {
	path?: string;
	error?: string;
	/** "type" field in the package.json file */
	moduleType?: string;
}

/**
 * Alias Value for [ResolveOptions::alias] and [ResolveOptions::fallback].
 * Use struct because napi don't support structured union now
 */
export interface Restriction {
	path?: string;
	regex?: string;
}

export declare function sync(path: string, request: string): ResolveResult;

/**
 * Tsconfig Options
 *
 * Derived from [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#options)
 */
export interface TsconfigOptions {
	/**
	 * Allows you to specify where to find the TypeScript configuration file.
	 * You may provide
	 * * a relative path to the configuration file. It will be resolved relative to cwd.
	 * * an absolute path to the configuration file.
	 */
	configFile: string;
	/**
	 * Support for Typescript Project References.
	 *
	 * * `'auto'`: use the `references` field from tsconfig of `config_file`.
	 * * `string[]`: manually provided relative or absolute path.
	 */
	references?: "auto" | string[];
}
