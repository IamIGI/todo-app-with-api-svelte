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
	id: string;
	title: string;
}

export interface EditModal {
	id: string;
	title: string;
}

export interface DeleteModal {
	id: string;
}

export interface DeleteEventModal {
	display: boolean;
	id: string;
}

export interface CloseEventModal {
	display: boolean;
}
