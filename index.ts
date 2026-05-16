export interface DailyEntry {
  id: string;
  date: string;
  bankBalance: number;
  convoysBalance: number;
  customerReceivable: number;
  customerIssued: number;
  collectionBalance: number;
  vendorsBalance: number;
  createdAt: string;
  createdBy: string;
}

export interface MonthlyItem {
  id: string;
  month: number;
  year: number;
  name: string;
  amount: number;
  paid: number;
  remaining: number;
  type: 'expense' | 'revenue' | 'other';
  createdAt: string;
}

export interface Vendor {
  id: string;
  code: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  contactPerson: string;
  category: string;
  totalAmount: number;
  paidAmount: number;
  remaining: number;
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
}

export interface ReconciliationDiff {
  id: string;
  reconciliationId: string;
  description: string;
  vendorBalance: number;
  ourBalance: number;
  difference: number;
  reason: string;
  resolved: boolean;
  resolvedAt: string | null;
  createdAt: string;
}

export interface VendorReconciliation {
  id: string;
  vendorId: string;
  month: number;
  year: number;
  vendorBalance: number;
  ourBalance: number;
  totalDifference: number;
  status: 'matched' | 'partial' | 'unmatched';
  items: ReconciliationDiff[];
  createdAt: string;
  createdBy: string;
}

export interface TrackingItem {
  id: string;
  name: string;
  category: string;
  month: number;
  year: number;
  status: 'completed' | 'in_progress' | 'not_started' | 'delayed';
  notes: string;
  createdAt: string;
}

export interface PendingInvoice {
  id: string;
  invoiceNumber: string;
  vendor: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'pending' | 'partial' | 'overdue';
  createdAt: string;
}

export interface RentalContract {
  id: string;
  propertyName: string;
  tenantName: string;
  monthlyRent: number;
  startDate: string;
  endDate: string;
  paymentDay: number;
  status: 'active' | 'expired' | 'terminated';
  createdAt: string;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  password: string;
  role: 'admin' | 'user';
  isActive: boolean;
  createdAt: string;
}

export interface CustomerStatement {
  id: string;
  customerName: string;
  totalAmount: number;
  paidAmount: number;
  remaining: number;
  lastTransaction: string;
  status: 'active' | 'closed';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export interface AppState {
  dailyEntries: DailyEntry[];
  monthlyItems: MonthlyItem[];
  vendors: Vendor[];
  currentAccounts: TrackingItem[];
  pendingInvoices: PendingInvoice[];
  rentalContracts: RentalContract[];
  users: User[];
  customerStatements: CustomerStatement[];
  
  addDailyEntry: (entry: Omit<DailyEntry, 'id' | 'createdAt'>) => void;
  updateDailyEntry: (id: string, entry: Partial<DailyEntry>) => void;
  deleteDailyEntry: (id: string) => void;
  
  addMonthlyItem: (item: Omit<MonthlyItem, 'id' | 'createdAt'>) => void;
  updateMonthlyItem: (id: string, item: Partial<MonthlyItem>) => void;
  deleteMonthlyItem: (id: string) => void;
  
  vendorReconciliations: VendorReconciliation[];
  
  addVendor: (vendor: Omit<Vendor, 'id' | 'createdAt'>) => void;
  updateVendor: (id: string, vendor: Partial<Vendor>) => void;
  deleteVendor: (id: string) => void;
  
  addReconciliation: (rec: Omit<VendorReconciliation, 'id' | 'createdAt'>) => void;
  updateReconciliation: (id: string, rec: Partial<VendorReconciliation>) => void;
  addReconciliationDiff: (recId: string, diff: Omit<ReconciliationDiff, 'id' | 'createdAt'>) => void;
  resolveDiff: (recId: string, diffId: string) => void;
  
  addPendingInvoice: (invoice: Omit<PendingInvoice, 'id' | 'createdAt'>) => void;
  updatePendingInvoice: (id: string, invoice: Partial<PendingInvoice>) => void;
  deletePendingInvoice: (id: string) => void;
  
  addRentalContract: (contract: Omit<RentalContract, 'id' | 'createdAt'>) => void;
  updateRentalContract: (id: string, contract: Partial<RentalContract>) => void;
  deleteRentalContract: (id: string) => void;
  
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}
