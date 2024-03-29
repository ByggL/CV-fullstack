import {
	Flex,
	Heading,
	Center,
	HStack,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";

export function Header() {
	return (
		<header>
			<Flex align="center" justify="space-between" bg="#CF3333">
				<Center m="20px">
					<a href="/">
						<Heading color="#222222" className="headerTitle">
							Samuel Léobon
						</Heading>
					</a>
				</Center>
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/formation">
							Formation
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/experience">
							Expérience
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/competences">
							Compétences
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/autres">Autres</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<HStack m="20px">
					<a href="https://www.linkedin.com/in/samuel-l%C3%A9obon-457a61228/">
						<svg width="48" height="48" viewBox="0 0 48 48">
							<path
								fill="#222222"
								d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
							/>
						</svg>
					</a>
					<a href="https://github.com/ByggL">
						<svg width="48" height="48" viewBox="0 0 1024 1024">
							<path
								fill="#222222"
								d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
								transform="scale(64)"
							/>
						</svg>
					</a>
				</HStack>
			</Flex>
		</header>
	);
}
