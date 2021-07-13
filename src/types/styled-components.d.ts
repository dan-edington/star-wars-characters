import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			[key: string]: any;
		};
	}
}
