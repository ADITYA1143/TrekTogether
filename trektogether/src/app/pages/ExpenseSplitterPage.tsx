import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, DollarSign, Receipt, Users } from 'lucide-react';

export default function ExpenseSplitterPage() {
  const { id } = useParams();

  const expenses = [
    { id: '1', description: 'Transportation', paidBy: 'Alex Kumar', amount: 240, category: 'Travel', participants: 8 },
    { id: '2', description: 'Accommodation', paidBy: 'Sarah Johnson', amount: 480, category: 'Lodging', participants: 8 },
    { id: '3', description: 'Food & Supplies', paidBy: 'Mike Chen', amount: 160, category: 'Food', participants: 8 },
    { id: '4', description: 'Guide Fees', paidBy: 'Alex Kumar', amount: 320, category: 'Services', participants: 8 },
  ];

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const perPerson = totalExpenses / 8;

  const settlements = [
    { from: 'Sarah Johnson', to: 'Alex Kumar', amount: 30 },
    { from: 'Mike Chen', to: 'Alex Kumar', amount: 70 },
    { from: 'Emma Wilson', to: 'Alex Kumar', amount: 150 },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Link
          to={`/trek/${id}`}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trek
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">Expense Splitter</h1>
          <p className="text-lg text-stone-600">Track and split trek expenses transparently</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm opacity-90">Total Expenses</span>
            </div>
            <p className="text-3xl">${totalExpenses.toFixed(2)}</p>
          </div>

          <div className="bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6" />
              <span className="text-sm opacity-90">Per Person</span>
            </div>
            <p className="text-3xl">${perPerson.toFixed(2)}</p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Receipt className="w-6 h-6" />
              <span className="text-sm opacity-90">Total Items</span>
            </div>
            <p className="text-3xl">{expenses.length}</p>
          </div>
        </div>

        {/* Expense List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-xl text-stone-900 mb-6">Expense List</h2>
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                <div className="flex-1">
                  <h3 className="text-stone-900 mb-1">{expense.description}</h3>
                  <p className="text-sm text-stone-600">
                    Paid by <span className="text-emerald-700">{expense.paidBy}</span> • {expense.category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl text-stone-900">${expense.amount}</p>
                  <p className="text-sm text-stone-500">${(expense.amount / expense.participants).toFixed(2)}/person</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settlement Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
          <h2 className="text-xl text-stone-900 mb-6">Who Owes Whom</h2>
          <div className="space-y-3">
            {settlements.map((settlement, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-stone-900">
                      <span className="text-emerald-700">{settlement.from}</span> owes{' '}
                      <span className="text-emerald-700">{settlement.to}</span>
                    </p>
                  </div>
                </div>
                <span className="text-xl text-amber-700">${settlement.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
