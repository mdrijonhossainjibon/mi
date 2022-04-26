import * as React from 'react';

interface ProfileIconProps {
	className?: string;
}

export const ProfileIcon: React.FC<ProfileIconProps> = (props: ProfileIconProps) => {
	return (
		<svg width="24" height="24" className={props.className} viewBox="0 0 24 24" fill="none">
			<path
				d="M12.1909 20.4697C9.31592 20.4697 6.77442 18.9977 5.29092 16.7897C5.32542 14.4897 9.89092 13.2247 12.1909 13.2247C14.4909 13.2247 19.0564 14.4897 19.0909 16.7897C17.6074 18.9977 15.0659 20.4697 12.1909 20.4697ZM12.1909 4.1397C13.1059 4.1397 13.9834 4.50318 14.6304 5.15018C15.2774 5.79718 15.6409 6.6747 15.6409 7.5897C15.6409 8.50469 15.2774 9.38222 14.6304 10.0292C13.9834 10.6762 13.1059 11.0397 12.1909 11.0397C11.2759 11.0397 10.3984 10.6762 9.7514 10.0292C9.1044 9.38222 8.74092 8.50469 8.74092 7.5897C8.74092 6.6747 9.1044 5.79718 9.7514 5.15018C10.3984 4.50318 11.2759 4.1397 12.1909 4.1397ZM12.1909 0.689697C10.6807 0.689697 9.1853 0.987154 7.79006 1.56508C6.39481 2.14301 5.12706 2.9901 4.05919 4.05797C1.90252 6.21464 0.690918 9.13971 0.690918 12.1897C0.690918 15.2397 1.90252 18.1648 4.05919 20.3214C5.12706 21.3893 6.39481 22.2364 7.79006 22.8143C9.1853 23.3922 10.6807 23.6897 12.1909 23.6897C15.2409 23.6897 18.166 22.4781 20.3226 20.3214C22.4793 18.1648 23.6909 15.2397 23.6909 12.1897C23.6909 5.8302 18.5159 0.689697 12.1909 0.689697Z"
				fill="var(--icons)"
			/>
		</svg>
	);
};
