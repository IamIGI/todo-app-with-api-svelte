export interface TodoItem {
	_id?: string;
	__v?: number;
	date: string;
	isDone: boolean;
	title: string;
	userName: string;
}

export interface EditEventModal {
	display: boolean;
	id: number;
}

export interface CloseEventModal {
	display: boolean;
}
