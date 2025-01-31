type DeleteConfirmModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export const DeleteConfirmModal = ({ isOpen, onClose, onConfirm }: DeleteConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium mb-4">削除の確認</h3>
                <p className="mb-6">本当にこの参拝者情報を削除しますか？</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded-md hover:bg-gray-100"
                    >
                        キャンセル
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                        削除する
                    </button>
                </div>
            </div>
        </div>
    );
};