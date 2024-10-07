# Daftar item dengan berat dan nilai
items = [(2, 3), (3, 4), (4, 5), (5, 8)]

# Kapasitas ransel
capacity = 8

# Fungsi untuk menghitung rasio nilai terhadap berat
def value_per_weight(item):
    weight, value = item
    return value / weight

# Mengurutkan item berdasarkan rasio nilai terhadap berat secara menurun
items.sort(key=value_per_weight, reverse=True)

# Inisialisasi total berat dan total nilai
total_weight = 0
total_value = 0
selected_items = []

# Memilih item secara greedy
for item in items:
    weight, value = item
    if total_weight + weight <= capacity:
        selected_items.append(item)
        total_weight += weight
        total_value += value

# Output hasil
print("Item yang dipilih:", selected_items)
print("Total berat:", total_weight)
print("Total nilai:", total_value)
